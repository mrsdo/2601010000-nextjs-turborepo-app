import { redirect } from "next/navigation"

import { type LayoutProps } from "@/types/common"
import { routes } from "@/constants/routes"
import { Container } from "@/features/admin/common/ui/container"
import { Navbar } from "@/features/admin/common/ui/navbar"
import { Sidebar } from "@/features/admin/common/ui/sidebar"
import { getCurrentUserId } from "@/features/admin/common/utilities/user"
import { getSpace } from "@/features/admin/space/utilities/space"

type SpaceLayoutProps = LayoutProps & {
  params: Promise<{
    spaceId: string
  }>
}

export const revalidate = 0

export default async function Layout({ children, params }: SpaceLayoutProps) {
  const { spaceId } = await params
  const userId = await getCurrentUserId()
  const space = await getSpace(spaceId, userId)

  if (!space) {
    redirect(routes.dashboard)
  }

  return (
    <>
      <Navbar />

      <div className="fixed inset-y-0 z-50 hidden h-full w-56 flex-col md:flex">
        <Sidebar />
      </div>

      <Container>{children}</Container>
    </>
  )
}
