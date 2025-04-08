import React from "react";
import { Text } from "@react-pdf/renderer";

interface Props {
  children: string;
  width: string;
  mono?: boolean;
  bold?: boolean;
  last?: boolean;
  blank?: boolean;
  align?: "right" | "left" | "center";
}

function TableCell({
  children,
  width,
  mono = false,
  bold = false,
  last = false,
  blank = false,
  align = "left",
}: Props) {
  return (
    <Text
      style={{
        width,
        borderRightColor: "#90e5fc",
        borderRightWidth: last ? 0 : 1,
        paddingLeft: 8,
        paddingRight: 8,
        textAlign: align,
        fontFamily: bold ? "Helvetica-Bold" : mono ? "Courier" : "Helvetica",
        fontStyle: bold ? "bold" : "normal",
        fontWeight: bold ? "bold" : "normal",
        fontSize: mono ? 12 : 10,
        ...(blank && { color: "white" }),
      }}
    >
      {children}
    </Text>
  );
}

export default TableCell;
