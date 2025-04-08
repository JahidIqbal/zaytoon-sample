"use server";
import { del } from "@/api/ApiClient";
import {callGuardedApi} from "@/api";

const deleteImage = async (id: number) => {
  return await callGuardedApi(async () => {
    await del(`api/v1/admin/slider/${id}`, {});
  });
};

export default deleteImage;
