import { Pagination } from "@/types/Common";
import { UserRole, User as UserBase } from "@/types/User";

export interface User extends UserBase {
}

export interface UsersResponse {
  users: User[];
  pagination: Pagination;
}

export interface UserFormData {
  firstName: string;
  lastName:string;
  email: string;
  password?: string;
  mobile: string;
}
