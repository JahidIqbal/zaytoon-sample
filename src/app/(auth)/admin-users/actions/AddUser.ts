"use server";

import { post } from "@/api/ApiClient";
import {callGuardedApi} from "@/api";
import { UserFormData } from "../Types";

const addUser = async (formData: UserFormData) => {
  return await callGuardedApi(async () => {
    await post("api/v1/admin-user", formData);
  });

};

export default addUser;
