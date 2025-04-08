
"use server";

import { post } from "@/api/ApiClient";
import {callGuardedApi} from "@/api";
import AuthManager from "@/services/AuthManager";
import { LoggedInUser } from "@/types/User";

const credentialsLogin = async (email : string , password:string) => {
  await AuthManager.logout();
  return callGuardedApi<LoggedInUser>(async () => {
    const res =  await post<LoggedInUser>("/api/v1/auth/login", { 
      email, password 
    });

    await AuthManager.login(res);
  });
};

export default credentialsLogin;
