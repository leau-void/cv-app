import "../styles/preview.css";
import React, { Component } from "react";
import {
  PDFDownloadLink,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";
import { PDFViewer } from "@react-pdf/renderer";
import reactDom from "react-dom";

const styles = StyleSheet.create({
  page: {
    marginTop: 150,
  },
  text: {},
});

const PreviewPDF = (props) => {
  const { general, professional, education, skills } = props.state;
  return (
    <Document title={`CV-${general.current.name}`}>
      <Page size="A4" wrap={false} style={styles.page}>
        <View style>
          <Text style={styles.text}>
            {" "}
            {/* debug={true} */}
            {general.current.name}
          </Text>
        </View>
      </Page>
    </Document>
  );
};

class Preview extends Component {
  render() {
    const { state } = this.props;
    return (
      <div className="preview">
        <PDFDownloadLink
          className="pdf-download"
          document={<PreviewPDF state={state} />}
          fileName={`CV-${state.general.current.name}.pdf`}
        >
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : "Download now!"
          }
        </PDFDownloadLink>
        <PDFViewer className="pdf-viewer" showToolbar={false}>
          <PreviewPDF state={state} />
        </PDFViewer>
      </div>
    );
  }
}

export default Preview;
