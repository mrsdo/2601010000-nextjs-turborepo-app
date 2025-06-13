import { notFound } from "next/navigation"

import {
  type PageMetadata,
  type PageProps,
  type StaticParams,
} from "@/types/common"
import { ContentContainer } from "@/features/public/common/ui/content-container"
import { getItemPageMetadata } from "@/features/public/explore/metadata/metadata"
import { Item } from "@/features/public/explore/ui/item"
import { List } from "@/features/public/explore/ui/list"
import {
  getItem,
  getPageSlugs,
  getSuggestedItems,
} from "@/features/public/explore/utilities/item"

export async function generateMetadata({ params }: PageProps): Promise<PageMetadata> {
  const { slug } = await params
  const metadata = await getItemPageMetadata(slug)
  return metadata || {}
}

export async function generateStaticParams(): Promise<StaticParams> {
  return await getPageSlugs()
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params
  const item = await getItem(slug)

  if (!item) {
    notFound()
  }

  const suggestedItems = await getSuggestedItems(
    String(item._id),
    item.categoryId
  )

  return (
    <ContentContainer withSpace>
      <Item item={item} />
      <hr />
      <List title="Suggested items" items={suggestedItems} nbCols={5} />
    </ContentContainer>
  )
}
