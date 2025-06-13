import { parseData } from "@/lib/utils"
import { FormContentHeading } from "@/features/admin/common/ui/form-content-heading"
import { COURSE_LABELS } from "@/features/admin/course/constants/course"
import { findOneCourse } from "@/features/admin/course/repository/course"
import { CourseForm } from "@/features/admin/course/ui/form"

type Props = {
  params: Promise<{
    courseId: string
  }>
}

export default async function Page({ params }: Props) {
  const { courseId } = await params
  const course = await findOneCourse(courseId)

  return (
    <>
      <FormContentHeading labels={COURSE_LABELS} isEdit={Boolean(course)} />

      <CourseForm initialData={parseData(course)} />
    </>
  )
}
