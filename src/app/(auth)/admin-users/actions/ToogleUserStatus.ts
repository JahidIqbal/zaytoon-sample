"use server";
import { patch, post } from "@/api/ApiClient";
import {callGuardedApi} from "@/api";
import { User } from "../Types";

const toogleUserStatus = async (user: User) => {
  return await callGuardedApi(async () => {
    await patch(`api/v1/admin-user/${user.id}/toggle-status`, {});
  });
};

export default toogleUserStatus;
