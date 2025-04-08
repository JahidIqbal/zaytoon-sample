"use server";

import { patch, put } from "@/api/ApiClient";
import { callGuardedApi } from "@/api";

interface ChangePasswordData {
  oldPassword: string;
  newPassword: string;
}

const changePassword = async (formData: ChangePasswordData) => {
  return await callGuardedApi(async () => {
    await patch("api/v1/admin-user/change-password", formData);
  });
};

export default changePassword;
