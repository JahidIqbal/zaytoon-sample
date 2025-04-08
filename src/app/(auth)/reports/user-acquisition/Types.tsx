import { Pagination } from "@/types/Common";

export interface UserAcquisitionItem {
    date: string;
    users: number;
    merchants: number;
  }
  
  export interface UserAcquisitionData {
    data: UserAcquisitionItem[];
    pagination?: Pagination;
  }

  export interface User {
    date: string;
    fullName: string;
    phone: string;
    email: string;
    role: string;
  }
  