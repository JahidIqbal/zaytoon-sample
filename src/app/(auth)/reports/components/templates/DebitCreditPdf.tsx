import React from "react";
import PdfReport from "../pdf/PdfReport";
import TableRow from "../pdf/TableRow";
import TableCell from "../pdf/TableCell";
import { formatPoysaForReport } from "../ReportPoysa";
import { Range } from "@/types/Common";
import BlankRows from "../pdf/BlankRows";
import { DebitCredit } from "../../Types";

interface Props {
  title: string;
  items: DebitCredit[];
  dateRange: Range<Date>;
}

function DebitCreditPdf({ title, items, dateRange }: Props) {
  const totalDebit = items.reduce((sum, item) => sum + item.debit, 0);
  const totalCredit = items.reduce((sum, item) => sum + item.credit, 0);
  const width = { name: "60%", debit: "20%", credit: "20%" };

  return (
    <PdfReport title={title} dateRange={dateRange}>
      <TableRow header>
        <TableCell width={width.name} bold>
          Name
        </TableCell>
        <TableCell width={width.debit} bold align="right">
          Debit
        </TableCell>
        <TableCell width={width.credit} bold align="right" last>
          Credit
        </TableCell>
      </TableRow>

      {items.map((item, index) => (
        <TableRow key={index}>
          <TableCell width={width.name}>{item.name}</TableCell>
          <TableCell width={width.debit} mono align="right">
            {formatPoysaForReport(item.debit)}
          </TableCell>
          <TableCell width={width.credit} mono align="right" last>
            {formatPoysaForReport(item.credit)}
          </TableCell>
        </TableRow>
      ))}

      <BlankRows
        minRowCount={12}
        rowCount={items.length}
        width={Object.values(width)}
      />

      <TableRow footer>
        <TableCell width={width.name} bold>
          TOTAL
        </TableCell>
        <TableCell width={width.debit} mono align="right">
          {formatPoysaForReport(totalDebit)}
        </TableCell>
        <TableCell width={width.credit} mono align="right" last>
          {formatPoysaForReport(totalCredit)}
        </TableCell>
      </TableRow>
    </PdfReport>
  );
}

export default DebitCreditPdf;
