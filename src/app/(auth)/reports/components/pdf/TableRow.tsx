import React, { ReactNode } from "react";
import { View, StyleSheet } from "@react-pdf/renderer";
import { Style } from "@react-pdf/types";

const baseStyles = StyleSheet.create({
  row: {
    flexDirection: "row",
    borderBottomColor: "#bff0fd",
    borderBottomWidth: 1,
    alignItems: "center",
    height: 24,
    fontFamily: "Helvetica",
    fontSize: 10,
  },
});

interface Props {
  children: ReactNode;
  header?: boolean;
  footer?: boolean;
  styles?: Style;
}

const TableRow = ({ children, header, footer, styles = {} }: Props) => {
  const style = (() => {
    if (!header && !footer) return baseStyles.row;

    if (footer) {
      return {
        ...baseStyles.row,
        fontFamily: "Helvetica-Bold",
        fontStyle: "bold",
        borderBottomWidth: 0,
      };
    }

    return {
      ...baseStyles.row,
      backgroundColor: "#f0fdfa",
      fontFamily: "Helvetica-Bold",
      fontStyle: "bold",
      flexGrow: 1,
    };
  })();

  return <View style={{ ...style, ...styles }}>{children}</View>;
};

export default TableRow;
