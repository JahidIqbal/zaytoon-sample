import { Range } from "@/types/Common";
import { DocumentProps } from "@react-pdf/renderer";
import { JSXElementConstructor, ReactElement } from "react";

export interface NameValue {
  code: string;
  name: string;
  value: number;
}

export interface DebitCredit {
  name: string;
  debit: number;
  credit: number;
}

export interface PdfTitleProps {
  title: string;
  dateRange: Range<Date>;
}

export type PdfDoc = ReactElement<
  DocumentProps,
  string | JSXElementConstructor<any>
>;

export interface PdfDocProps {
  document: PdfDoc | undefined;
}
