import { countAllBillboardsBySpaceId } from "@/lib/database/billboard"
import { countAllCategoriesBySpaceId } from "@/lib/database/category"
import {
  countAllItemsByMonthBySpaceId,
  countAllItemsBySpaceId,
} from "@/lib/database/items"
import { findOneSpace } from "@/lib/database/space"
import { getCurrentUserId } from "./user"

export const getOverview = async (spaceId: string) => {
  const userId = await getCurrentUserId()
  
  const space = await findOneSpace(spaceId, userId)
  if (!space) {
    throw new Error("Unauthorized access to space")
  }

  const totalBillboards = await countAllBillboardsBySpaceId(spaceId)
  const totalCategories = await countAllCategoriesBySpaceId(spaceId)
  const totalItems = await countAllItemsBySpaceId(spaceId)
  const monthlyItems = await countAllItemsByMonthBySpaceId(spaceId)

  return {
    totalBillboards,
    totalCategories,
    totalItems,
    monthlyItems,
  }
}
