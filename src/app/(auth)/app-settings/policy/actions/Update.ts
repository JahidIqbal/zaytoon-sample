"use server";

import { patch } from "@/api/ApiClient";
import { callGuardedApi } from "@/api";

const update = async (feature: string, html: string) => {
  return await callGuardedApi(async () => {
    await patch(`api/v1/admin/contents/policy`, {
      feature,
      html,
    });
  });
};

export default update;
