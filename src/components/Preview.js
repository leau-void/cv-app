import "../styles/preview.css";
import React, { Component } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { PDFViewer } from "@react-pdf/renderer";
import PreviewPDF from "./PreviewPDF";

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
        ;
      </div>
    );
  }
}

export default Preview;
