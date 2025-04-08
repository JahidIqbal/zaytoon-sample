"use server";

import { patch } from "@/api/ApiClient";
import {callGuardedApi} from "@/api";
import { FormData } from "../Types";

const editQuestion = async (id: number, formData: FormData) => {
  return await callGuardedApi(async () => {
    await patch(`api/v1/admin/contents/faq/${id}`, formData);
  });
};

export default editQuestion;
