import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
  },
  reportTitle: {
    textAlign: "center",
    fontFamily: "Times-Roman",
    fontSize: 9,
    fontStyle: "italic",
    color: "#666",
    fontWeight: "light",
  },
});

const ConfidentialMsg = () => (
  <View style={styles.titleContainer}>
    <Text style={styles.reportTitle}>
      This is a system generated information and does not require any signature.
      This file is confidential and may also be privileged.
    </Text>
  </View>
);

export default ConfidentialMsg;
