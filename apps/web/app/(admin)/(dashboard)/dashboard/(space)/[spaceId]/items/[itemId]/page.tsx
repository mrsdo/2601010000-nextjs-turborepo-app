import { parseData } from "@/lib/utils"
import { getAllCategories } from "@/features/admin/category/utilities/category"
import { FormContentHeading } from "@/features/admin/common/ui/form-content-heading"
import { ITEM_LABELS } from "@/features/admin/item/constants/item"
import { ItemForm } from "@/features/admin/item/ui/form"
import { getItem } from "@/features/admin/item/utilities/item"

type Props = {
  params: Promise<{
    spaceId: string
    itemId: string
  }>
}

export default async function Page({ params }: Props) {
  const { spaceId, itemId } = await params
  const item = await getItem(itemId)
  const categories = await getAllCategories(spaceId)

  return (
    <>
      <FormContentHeading labels={ITEM_LABELS} isEdit={Boolean(item)} />

      <ItemForm
        initialData={parseData(item)}
        categories={parseData(categories)}
      />
    </>
  )
}
