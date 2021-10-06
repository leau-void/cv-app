import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({});

const PDFMaker = (props) => {
  const { general, professional, education, skills } = props.state;
  return (
    <Document title={`CV-${general.name}`}>
      <Page size="A4" wrap={false} style>
        <View style>
          <Text style>
            {" "}
            {/* debug={true} */}
            {general.name}
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default PDFMaker;
