import { NextResponse } from "next/server"
import { auth } from "@clerk/nextjs/server"

import {
  deleteOneBillboard,
  findOneBillboard,
  updateOneBillboard,
} from "@/lib/database/billboard"
import { countAllCategoriesBySpaceIdAndBillboardId } from "@/lib/database/category"
import { findOneSpace } from "@/lib/database/space"

type ApiProps = {
  params: Promise<{
    spaceId: string
    billboardId: string
  }>
}

type PatchProps = ApiProps
type DeleteProps = ApiProps

type GetProps = {
  params: Promise<{
    billboardId: string
  }>
}

interface JsonResponse {
  label: string | null
  imageUrl: string | null
}

export async function GET(req: Request, { params }: GetProps) {
  try {
    const { billboardId } = await params
    if (!billboardId) {
      return new NextResponse("Billboard Id is required", { status: 400 })
    }

    const billboard = await findOneBillboard(billboardId)

    return NextResponse.json(billboard)
  } catch (error) {
    console.log("[BILLBOARDS_GET]", error)
    return new NextResponse("Internal error", { status: 500 })
  }
}

export async function PATCH(req: Request, { params }: PatchProps) {
  try {
    const { spaceId, billboardId } = await params
    const { userId } = await auth()

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    const body = (await req.json()) as JsonResponse
    const { label, imageUrl } = body

    if (!label) {
      return new NextResponse("Label is required", { status: 400 })
    }

    if (!imageUrl) {
      return new NextResponse("Image URL is required", { status: 400 })
    }

    if (!billboardId) {
      return new NextResponse("Billboard Id is required", { status: 400 })
    }

    const spaceByUserId = await findOneSpace(spaceId, userId)

    if (!spaceByUserId) {
      return new NextResponse("Unauthorized", { status: 403 })
    }

    const billboard = await updateOneBillboard(billboardId, {
      label,
      imageUrl,
    })

    return NextResponse.json(billboard)
  } catch (error) {
    console.log("[BILLBOARDS_PATCH]", error)
    return new NextResponse("Internal error", { status: 500 })
  }
}

export async function DELETE(req: Request, { params }: DeleteProps) {
  try {
    const { spaceId, billboardId } = await params
    const { userId } = await auth()

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    if (!billboardId) {
      return new NextResponse("Billboard Id is required", { status: 400 })
    }

    const spaceByUserId = await findOneSpace(spaceId, userId)

    if (!spaceByUserId) {
      return new NextResponse("Unauthorized", { status: 403 })
    }

    const categoriesWithBillboard =
      await countAllCategoriesBySpaceIdAndBillboardId(
        spaceId,
        billboardId
      )

    if (categoriesWithBillboard > 0) {
      return new NextResponse(
        `You cannot delete this billboard. This billboard is attached to ${categoriesWithBillboard} categories. You must delete those categories before.`,
        { status: 402 }
      )
    }

    const billboard = await deleteOneBillboard(billboardId)

    return NextResponse.json(billboard)
  } catch (error) {
    console.log("[BILLBOARDS_DELETE]", error)
    return new NextResponse("Internal error", { status: 500 })
  }
}
