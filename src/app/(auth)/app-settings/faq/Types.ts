import { ResultWithoutData } from "@/api";

export interface Faq {
  id: number;
  question: string;
  answer: string;
  order: number;
  feature?: string;
}

export interface FaqResponse {
  [feature: string]: Faq[];
}

export interface FormData {
  question: string;
  answer: string;
  feature: string;
}

export interface ModalData {
  faq?: Faq;
  feature?: string;
}

export type OpenModalForm = (data: ModalData) => void;

export interface FormProps {
  data: ModalData;
}
