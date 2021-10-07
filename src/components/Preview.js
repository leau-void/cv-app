import "../styles/preview.css";
import React, { Component } from "react";
import CV from "./CV";
import ReactToPrint from "react-to-print";

class Preview extends Component {
  constructor(props) {
    super(props);
    this.printOutRef = React.createRef();
  }
  render() {
    const { state } = this.props;
    return (
      <>
        <ReactToPrint
          documentTitle={"CV-" + state.general.name}
          trigger={() => <button>Print or Download as PDF</button>}
          content={() => this.printOutRef.current}
        />
        <div className="print-container" ref={this.printOutRef}>
          <CV state={state} />
        </div>
      </>
    );
  }
}

export default Preview;
