import React, { ReactNode } from "react";
import { Page, Document, Image, StyleSheet, View } from "@react-pdf/renderer";
import ReportTitle from "./ReportTitle";
import ConfidentialMsg from "./ConfidentialMsg";
import { PdfTitleProps } from "../../Types";

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 11,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 25,
    paddingRight: 25,
    lineHeight: 1.5,
    flexDirection: "column",
    flexGrow: 1,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    width: 74,
    height: 66,
  },
  titleContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  contentContainer: {
    flexGrow: 1,
    fontFamily: "Times-Roman",
    fontSize: 11,
    marginTop: 20,
  },
  tableContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    borderWidth: 1,
    borderColor: "#bff0fd",
  },
  footerContainer: {
    marginTop: "auto",
  },
});

interface Props {
  children: ReactNode;
}

const PdfReport = ({ children, title, dateRange }: Props & PdfTitleProps) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.headerContainer}>
        <Image style={styles.logo} src="/logo.png" />
        <View style={styles.titleContainer}>
          <ReportTitle title={title} dateRange={dateRange} />
        </View>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.tableContainer}>{children}</View>
      </View>
      <View style={styles.footerContainer}>
        <ConfidentialMsg />
      </View>
    </Page>
  </Document>
);

export default PdfReport;
