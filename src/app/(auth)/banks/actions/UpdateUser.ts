"use server";
import { put } from "@/api/ApiClient";
import {callGuardedApi} from "@/api";
import { User, UserFormData } from "../Types";

const updateUser = async (user: User, formData: UserFormData) => {
  return await callGuardedApi(async () => {
    delete formData.password;
    await put(`api/v1/admin-user/${user.id}`, formData);
  });
};

export default updateUser;
