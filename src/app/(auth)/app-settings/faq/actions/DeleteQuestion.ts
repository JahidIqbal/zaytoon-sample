"use server";

import { del } from "@/api/ApiClient";
import {callGuardedApi} from "@/api";

const deleteQuestion = async (id: number) => {
  return await callGuardedApi(async () => {
    await del(`api/v1/admin/contents/faq/${id}`, {});
  });
};

export default deleteQuestion;
