import { Separator } from "@shared/ui"
import { ANALYTICS_LABELS } from "@/features/admin/analytics/constants/course"
import { ApiList } from "@/features/admin/common/ui/api-list"
import { ListHeading } from "@/features/admin/common/ui/list-heading"

export default async function Page(
  { params }: { params: Promise<{ spaceId: string }> }
) {
  const { spaceId } = await params
  const { list: listLabels, api: apiLabels, resource } = ANALYTICS_LABELS
  return (
    <>
      <ListHeading labels={listLabels} value={0} path={`/${resource}/new`} />
      <Separator />
      <ApiList
        resource={resource}
        resourceId={apiLabels.resourceId}
        spaceId={spaceId}
      />
    </>
  )
}
