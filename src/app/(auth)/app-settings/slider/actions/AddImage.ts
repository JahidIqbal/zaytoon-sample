"use server";

import { post } from "@/api/ApiClient";
import { callGuardedApi } from "@/api";
import { AddFormData } from "../Types";

const addImage = async (formData: AddFormData) => {
  if (formData.file == undefined) return { error: "File missing" };

  return await callGuardedApi(async () => {
    await post("api/v1/admin/slider", formData);
  });
};

export default addImage;
