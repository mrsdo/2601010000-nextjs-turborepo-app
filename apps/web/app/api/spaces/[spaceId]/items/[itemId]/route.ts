import { NextResponse } from "next/server"
import { auth } from "@clerk/nextjs/server"

import { deleteOneItem, findOneItemWithCategory, updateOneItem } from "@/lib/database/items"
import { findOneSpace } from "@/lib/database/space"

type ApiProps = {
  params: Promise<{
    spaceId: string
    itemId: string
  }>
}

type PatchProps = ApiProps
type DeleteProps = ApiProps

type GetProps = {
  params: Promise<{
    spaceId: string
    itemId: string
  }>
}

interface JsonResponse {
  name: string | null
  categoryId: string | null
  images: []
  isFeatured: boolean
  isArchived: boolean
}

export async function GET(req: Request, { params }: GetProps) {
  try {
    const { itemId, spaceId } = await params
    if (!itemId) {
      return new NextResponse("Item Id is required", { status: 400 })
    }

    if (!spaceId) {
      return new NextResponse("Space Id is required", { status: 400 })
    }

    // Use findOneItemWithCategory to include category information and spaceId filtering
    const item = await findOneItemWithCategory(itemId, spaceId, { isArchived: false })

    return NextResponse.json(item)
  } catch (error) {
    console.log("[ITEMS_GET]", error)
    return new NextResponse("Internal error", { status: 500 })
  }
}

export async function PATCH(req: Request, { params }: PatchProps) {
  try {
    const { spaceId, itemId } = await params
    const { userId } = await auth()

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    const body = (await req.json()) as JsonResponse
    const { name, categoryId, images, isFeatured, isArchived } = body

    if (!name) {
      return new NextResponse("Name is required", { status: 400 })
    }

    if (!images || !images.length) {
      return new NextResponse("Images are required", { status: 400 })
    }

    if (!categoryId) {
      return new NextResponse("Category Id URL is required", { status: 400 })
    }

    const spaceByUserId = await findOneSpace(spaceId, userId)

    if (!spaceByUserId) {
      return new NextResponse("Unauthorized", { status: 403 })
    }

    const item = await updateOneItem(itemId, {
      name,
      categoryId,
      images,
      isFeatured,
      isArchived,
    })

    return NextResponse.json(item)
  } catch (error) {
    console.log("[ITEMS_PATCH]", error)
    return new NextResponse("Internal error", { status: 500 })
  }
}

export async function DELETE(req: Request, { params }: DeleteProps) {
  try {
    const { spaceId, itemId } = await params
    const { userId } = await auth()

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    if (!itemId) {
      return new NextResponse("Item Id is required", { status: 400 })
    }

    const spaceByUserId = await findOneSpace(spaceId, userId)

    if (!spaceByUserId) {
      return new NextResponse("Unauthorized", { status: 403 })
    }

    const item = await deleteOneItem(itemId)

    return NextResponse.json(item)
  } catch (error) {
    console.log("[ITEMS_DELETE]", error)
    return new NextResponse("Internal error", { status: 500 })
  }
}
