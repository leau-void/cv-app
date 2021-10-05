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
        degree: "",
        city: "",
        from: "",
        to: "",
        description: "",
      },
      saved: {},
      doEdit: true,
    },
  ],
  professional: [
    {
      current: {
        position: "",
        company: "",
        city: "",
        from: "",
        to: "",
        description: "",
      },
      saved: {},
      doEdit: true,
    },
  ],
};

class App extends Component {
  constructor(props) {
    super(props);

    this.handlers = {
      fetchInput: this.fetchInput.bind(this),
      saveInput: this.saveInput.bind(this),
      clearInput: this.clearInput.bind(this),
      addEntry: this.addEntry.bind(this),
    };

    this.state = JSON.parse(JSON.stringify(defaultState));
  }

  fetchInput({ e, prop, zone, index }) {
    this.setState((prevState) => {
      const newState = { ...prevState };
      if (Array.isArray(newState[zone])) {
        const newSubZone = {
          ...prevState[zone][index].current,
          [prop]: e.target.value,
        };

        newState[zone][index].current = newSubZone;
      } else {
        newState[zone].current = {
          ...newState[zone].current,
          [prop]: e.target.value,
        };
      }
      return newState;
    });
  }

  saveInput({ e, state: targetObj, zone, index }) {
    this.setState((prevState) => {
      const newState = { ...prevState };
      let newZone;
      if (Array.isArray(newState[zone])) {
        newZone = [...newState[zone]];
        const newSubZone = {
          ...prevState[zone][index],
          doEdit: false,
          saved: { ...targetObj },
        };
        newZone[index] = newSubZone;
      } else {
        newZone = {
          ...prevState[zone],
          doEdit: false,
          saved: { ...targetObj },
        };
      }

      newState[zone] = newZone;
      return newState;
    });
  }

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

  addEntry({ zone }) {
    this.setState((prevState) => {
      const newState = { ...prevState };
      newState[zone] = [
        ...newState[zone],
        JSON.parse(JSON.stringify(defaultState[zone][0])),
      ];
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
