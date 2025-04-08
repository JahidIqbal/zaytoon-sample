"use server";

import { patch } from "@/api/ApiClient";
import {callGuardedApi} from "@/api";

const toogleImageStatus = async (id: number) => {
  return await callGuardedApi(async () => {
    await patch(`api/v1/admin/slider/${id}/toggle-status`, {});
  });
};

export default toogleImageStatus;
