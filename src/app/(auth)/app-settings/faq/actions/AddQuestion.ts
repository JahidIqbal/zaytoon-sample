"use server";

import { post } from "@/api/ApiClient";
import {callGuardedApi} from "@/api";
import { FormData } from "../Types";

const addImage = async (formData: Required<FormData>) => {
  return await callGuardedApi(async () => {
    await post("api/v1/admin/contents/faq", formData);
  });
};

export default addImage;
