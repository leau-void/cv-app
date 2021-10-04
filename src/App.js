import "./App.css";
import React, { Component } from "react";
import Preview from "./components/Preview";
import OuterForm from "./components/OuterForm";

const defaultState = {
  general: {
    current: {
      name: "",
      title: "",
      address: "",
      phone: "",
      email: "",
      description: "",
    },
    saved: {},
    doEdit: true,
  },
  education: [
    {
      current: {
        name: "",
        title: "",
        address: "",
        phone: "",
        email: "",
        description: "",
      },
      saved: {},
      doEdit: true,
    },
    {
      current: {
        name: "",
        title: "",
        address: "",
        phone: "",
        email: "",
        description: "",
      },
      saved: {},
      doEdit: true,
    },
  ],
  professional: [{}],
};

class App extends Component {
  constructor(props) {
    super(props);

    this.handlers = {
      fetchInput: this.fetchInput.bind(this),
      clearInput: this.clearInput.bind(this),
    };

    this.state = JSON.parse(JSON.stringify(defaultState));
  }

  fetchInput({ e, key: targetKey, zone, index }) {
    this.setState((prevState) => {
      const newState = { ...prevState };
      if (Array.isArray(newState[zone])) {
        const newSubZone = {
          ...prevState[zone][index].current,
          [targetKey]: e.target.value,
        };

        newState[zone][index].current = newSubZone;
      } else {
        newState[zone].current = {
          ...newState[zone].current,
          [targetKey]: e.target.value,
        };
      }
      return newState;
    });
  }

  saveInput({ e, state: targetObj, zone, index }) {}

  clearInput({ zone, index }) {
    this.setState((prevState) => {
      const newState = { ...prevState };
      let newZone;
      if (Array.isArray(defaultState[zone])) {
        newZone = [...prevState[zone]];
        const newSubZone = { ...defaultState[zone][0] };
        newZone[index] = newSubZone;
      } else {
        newZone = { ...defaultState[zone] };
      }
      newState[zone] = newZone;
      return newState;
    });
  }

  render() {
    return (
      <div>
        <OuterForm state={this.state} handlers={this.handlers} />
        <Preview />
      </div>
    );
  }
}

export default App;
