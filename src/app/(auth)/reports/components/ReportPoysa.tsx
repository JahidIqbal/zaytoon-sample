import AsolPoysa from "@/components/formats/Poysa";
import { formatPoysa } from "@/utils/PoysaUtil";
import React from "react";

interface Props {
  value: number;
}

export function formatPoysaForReport(value: number) {
  const isNegative = value < 0;

  return `${isNegative ? "(" : ""}${formatPoysa(Math.abs(value))}${
    isNegative ? ")" : ""
  }`;
}

function ReportPoysa({ value }: Props) {
  return <AsolPoysa value={formatPoysaForReport(value)} />;
}

export default ReportPoysa;
