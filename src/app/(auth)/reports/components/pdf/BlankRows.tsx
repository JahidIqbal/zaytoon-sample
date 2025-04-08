import React from "react";
import BlankRow from "./BlankRow";

interface Props {
  minRowCount: number;
  rowCount: number;
  width: string[];
}

function BlankRows({ minRowCount, rowCount, width }: Props) {
  const blankRows = Array(Math.max(0, minRowCount - rowCount)).fill(0);

  return (
    <>
      {blankRows.map((x, rowIdx) => (
        <BlankRow key={`BR${rowIdx}`} width={width} />
      ))}
    </>
  );
}

export default BlankRows;
