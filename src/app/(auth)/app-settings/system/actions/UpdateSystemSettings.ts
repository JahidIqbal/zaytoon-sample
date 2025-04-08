"use server";

import { post } from "@/api/ApiClient";
import { callGuardedApi } from "@/api";
import { SystemSettings } from "../Types";

const updateSystemSettings = async (data: SystemSettings) => {
    return await callGuardedApi(async () => {
        await post(`api/v1/admin/user/system/settings`, data);
    });
};

export default updateSystemSettings;
