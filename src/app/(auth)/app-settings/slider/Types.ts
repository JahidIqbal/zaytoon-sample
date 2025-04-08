export enum UserType {
  CUSTOMER = "CUSTOMER",
  MERCHANT = "MERCHANT",
}

export enum ImageStatus {
  PUBLISHED = "PUBLISHED",
  UNPUBLISHED = "UNPUBLISHED",
}

export interface SliderImage {
  id: number;
  userType: UserType | string;
  title: string;
  url: string;
  status: ImageStatus | string;
  order: number;
  target?: string;
}

export interface SliderResponse {
  data: SliderImage[];
}

export interface AddFormData {
  userType: UserType;
  title: string;
  file?: File;
  target?: string;
}

export interface EditFormData {
  title: string;
  target?: string;
}
