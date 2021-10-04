import "./App.css";
import React, { Component } from "react";
import Preview from "./components/Preview";
import OuterForm from "./components/OuterForm";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div>
        <OuterForm />
        <Preview />
      </div>
    );
  }
}

export default App;
