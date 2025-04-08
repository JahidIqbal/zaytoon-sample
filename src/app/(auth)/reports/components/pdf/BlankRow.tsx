import React from "react";
import TableRow from "./TableRow";
import TableCell from "./TableCell";

interface Props {
  width?: string[];
}

function BlankRow({ width }: Props) {
  return (
    <TableRow>
      {width &&
        width.map((w, cellIdx) => (
          <TableCell
            key={`BRC${cellIdx}`}
            width={w}
            blank
            last={cellIdx == width.length - 1}
          >
            -
          </TableCell>
        ))}
      {!width && (
        <TableCell width="100%" blank last>
          -
        </TableCell>
      )}
    </TableRow>
  );
}

export default BlankRow;
