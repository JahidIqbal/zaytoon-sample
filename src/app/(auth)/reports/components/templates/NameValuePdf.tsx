import React from "react";
import PdfReport from "../pdf/PdfReport";
import TableRow from "../pdf/TableRow";
import TableCell from "../pdf/TableCell";
import { formatPoysaForReport } from "../ReportPoysa";
import { LabelAndValue, Range } from "@/types/Common";
import { NameValue } from "../../Types";
import NameValuePdfSection from "./NameValuePdfSection";

interface Props {
  title: string;
  sections: LabelAndValue<NameValue[]>[];
  dateRange: Range<Date>;
  lastRow: LabelAndValue<number>;
  lastRowBg?: string;
}

function NameValuePdf({
  title,
  sections,
  dateRange,
  lastRow,
  lastRowBg = "#ffffff",
}: Props) {
  const width = { code: "20%", name: "60%", value: "20%" };
  const totalWidth = `${parseInt(width.name) + parseInt(width.code)}%`;

  return (
    <PdfReport title={title} dateRange={dateRange}>
      <TableRow header>
        <TableCell width={width.code} bold>
          Code
        </TableCell>
        <TableCell width={width.name} bold>
          Name
        </TableCell>
        <TableCell width={width.value} bold align="right" last>
          Value
        </TableCell>
      </TableRow>

      {sections.map((section) => (
        <NameValuePdfSection
          key={`NVPS_${section.label}`}
          width={width}
          totalWidth={totalWidth}
          items={section.value}
          label={section.label}
        />
      ))}

      <TableRow footer styles={{ backgroundColor: lastRowBg }}>
        <TableCell width={totalWidth} bold>
          {lastRow.label}
        </TableCell>
        <TableCell width={width.value} mono align="right" last>
          {formatPoysaForReport(lastRow.value)}
        </TableCell>
      </TableRow>
    </PdfReport>
  );
}

export default NameValuePdf;
