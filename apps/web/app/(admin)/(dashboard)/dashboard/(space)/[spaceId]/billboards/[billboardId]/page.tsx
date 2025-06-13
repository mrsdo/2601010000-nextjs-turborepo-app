import { parseData } from "@/lib/utils"
import { BILLBOARD_LABELS } from "@/features/admin/billboard/constants/billboard"
import { BillboardForm } from "@/features/admin/billboard/ui/form"
import { getBillboard } from "@/features/admin/billboard/utilities/billboard"
import { FormContentHeading } from "@/features/admin/common/ui/form-content-heading"

type Props = {
  params: Promise<{
    billboardId: string
  }>
}

export default async function Page({ params }: Props) {
  const { billboardId } = await params
  const billboard = await getBillboard(billboardId)

  return (
    <>
      <FormContentHeading
        labels={BILLBOARD_LABELS}
        isEdit={Boolean(billboard)}
      />

      <BillboardForm initialData={parseData(billboard)} />
    </>
  )
}
