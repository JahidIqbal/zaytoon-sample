"use server";
import { callGuardedApi, del } from "@/api";
import { User } from "../Types";

const deleteAdmin = async (user: User) => {
  return await callGuardedApi(async () => {
    await del(`api/v1/admin-user/${user.id}`);
  });
};

export default deleteAdmin;
