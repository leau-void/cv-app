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
      <div className="preview">
        <ReactToPrint
          documentTitle={"CV-" + state.general.name}
          trigger={() => <a href="#/">Print or Download as PDF</a>}
          content={() => this.printOutRef.current}
        />
        <div ref={this.printOutRef}>
          <CV state={state} />
        </div>
      </div>
    );
  }
}

export default Preview;
