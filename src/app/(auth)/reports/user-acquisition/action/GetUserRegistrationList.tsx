"use server";

import { get } from "@/api/ApiClient";
import { callGuardedApi } from "@/api";
import { DateRangeProp } from "@/types/Common";

const getUserRegistrationList = async (start: string, end: string) => {
  return await callGuardedApi(async () => {
    const queryParams = new URLSearchParams({ start: start, end: end }).toString();
    const data = await get<Blob>(`api/v1/admin/user/report?${queryParams}`);
    return { responseData: data };
  });
};

export default getUserRegistrationList;
