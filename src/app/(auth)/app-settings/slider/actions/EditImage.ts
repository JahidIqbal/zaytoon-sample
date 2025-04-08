"use server";

import { patch } from "@/api/ApiClient";
import {callGuardedApi} from "@/api";
import { EditFormData } from "../Types";

const editImage = async (id: number, formData: EditFormData) => {
  return await callGuardedApi(async () => {
    await patch(`api/v1/admin/slider/${id}`, formData);
  });
};

export default editImage;
