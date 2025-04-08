"use server";

import { post } from "@/api/ApiClient";
import { callGuardedApi } from "@/api";

const reorderImages = async (orderedIds: number[]) => {
  return await callGuardedApi(async () => {
    const orders = orderedIds.reduce((acc, curr, idx) => {
      return {
        ...acc,
        [curr]: idx + 1,
      };
    }, {} as Record<number, number>);

    await post(`api/v1/admin/slider/reorder`, { orders });
  });
};

export default reorderImages;
