import React from "react";
import TableRow from "../pdf/TableRow";
import TableCell from "../pdf/TableCell";
import { formatPoysaForReport } from "../ReportPoysa";
import BlankRows from "../pdf/BlankRows";
import { NameValue } from "../../Types";
import BlankRow from "../pdf/BlankRow";
import { getTotal } from "../../functions";

interface Props {
  label: string;
  items: NameValue[];
  width: {
    code: string;
    name: string;
    value: string;
  };
  totalWidth: string;
}

function NameValuePdfSection({ label, items, width, totalWidth }: Props) {
  return (
    <>
      <TableRow header styles={{ backgroundColor: "#eeeeee" }}>
        <TableCell width="100%" bold last align="center">
          {label}
        </TableCell>
      </TableRow>

      {items.map((item, index) => (
        <TableRow key={index}>
          <TableCell width={width.code}>{item.code}</TableCell>
          <TableCell width={width.name}>{item.name}</TableCell>
          <TableCell width={width.value} mono align="right" last>
            {formatPoysaForReport(item.value)}
          </TableCell>
        </TableRow>
      ))}

      <BlankRows
        minRowCount={1}
        rowCount={items.length}
        width={Object.values(width)}
      />

      <TableRow>
        <TableCell width={totalWidth} bold>
          {`Total ${label}`}
        </TableCell>
        <TableCell width={width.value} mono align="right" last>
          {formatPoysaForReport(getTotal(items))}
        </TableCell>
      </TableRow>

      <BlankRow />
    </>
  );
}

export default NameValuePdfSection;
