import "../styles/preview.css";
import React, { useRef } from "react";
import CV from "./CV";
import ReactToPrint from "react-to-print";

const Preview = (props) => {
  const { state } = props;
  const printOutRef = useRef();

  return (
    <div className="preview">
      <ReactToPrint
        documentTitle={"CV-" + state.general.name}
        trigger={() => (
          <button className="button button_print">Print as PDF</button>
        )}
        content={() => printOutRef.current}
      />
      <div className="print-container" ref={printOutRef}>
        <CV state={state} />
      </div>
    </div>
  );
};

export default Preview;
