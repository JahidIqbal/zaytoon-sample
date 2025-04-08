"use server";

import { post } from "@/api/ApiClient";
import { callGuardedApi } from "@/api";
import { AppSettings } from "../Types";

const updateAppSettings = async (data: AppSettings) => {
  return await callGuardedApi(async () => {
    await post(`api/v1/admin/user/merchant/settings`, data);
  });
};

export default updateAppSettings;
