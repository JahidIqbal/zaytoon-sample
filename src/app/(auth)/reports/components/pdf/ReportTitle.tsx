import React, { Fragment } from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { formatToDMY } from "@/utils/DateUtils";
import { Range } from "@/types/Common";

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
  },
  reportTitle: {
    color: "#4BA361",
    textAlign: "right",
    textTransform: "uppercase",
    fontWeight: "bold",
    fontFamily: "Helvetica-Bold",
    fontSize: 13,
  },
  container: {
    flexDirection: "column",
    justifyContent: "flex-end",
    fontFamily: "Helvetica",
    fontSize: 10,
    marginTop: 4,
  },
  dateRow: {
    flexDirection: "row",
  },
  date: {
    fontStyle: "bold",
    fontFamily: "Courier",
    fontWeight: "bold",
    textAlign: "right",
  },
  label: {
    width: 60,
  },
});

interface Props {
  title: string;
  dateRange: Range<Date>;
}

const ReportTitle = ({ title, dateRange }: Props) => (
  <Fragment>
    <View style={styles.titleContainer}>
      <Text style={styles.reportTitle}>{title}</Text>
    </View>
    <View style={styles.container}>
      <View style={styles.dateRow}>
        <Text style={styles.label}>Period: </Text>
        <View style={styles.dateRow}>
          <Text style={styles.date}>
            {formatToDMY(dateRange.min)} to {formatToDMY(dateRange.max)}
          </Text>
        </View>
      </View>
      <View style={styles.dateRow}>
        <Text style={styles.label}>Currency: </Text>
        <Text style={styles.date}>BDT</Text>
      </View>
    </View>
  </Fragment>
);

export default ReportTitle;
