import { parseData } from "@/lib/utils"
import { getAllBillboards } from "@/features/admin/billboard/utilities/billboard"
import { CATEGORY_LABELS } from "@/features/admin/category/constants/category"
import { CategoryForm } from "@/features/admin/category/ui/form"
import { getCategory } from "@/features/admin/category/utilities/category"
import { FormContentHeading } from "@/features/admin/common/ui/form-content-heading"

type Props = {
  params: Promise<{
    spaceId: string
    categoryId: string
  }>
}

export default async function Page({ params }: Props) {
  const { spaceId, categoryId } = await params
  const category = await getCategory(categoryId)
  const billboards = await getAllBillboards(spaceId)

  return (
    <>
      <FormContentHeading labels={CATEGORY_LABELS} isEdit={Boolean(category)} />

      <CategoryForm
        initialData={parseData(category)}
        billboards={parseData(billboards)}
      />
    </>
  )
}
