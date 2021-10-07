import "./styles/normalize.css";
import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Preview from "./components/Preview";
import OuterForm from "./components/OuterForm";
import defaultState from "./data/defaultState";
import exampleState from "./data/exampleState";

class App extends Component {
  constructor(props) {
    super(props);

    this.handlers = {
      fetchInput: this.fetchInput.bind(this),
      clearInput: this.clearInput.bind(this),
      addEntry: this.addEntry.bind(this),
      removeEntry: this.removeEntry.bind(this),
      addSkill: this.addSkill.bind(this),
      removeSkill: this.removeSkill.bind(this),
      loadExample: this.loadExample.bind(this),
      resetForm: this.resetForm.bind(this),
    };

    this.state = JSON.parse(JSON.stringify(defaultState));
  }

  fetchInput({ e, prop, zone, index }) {
    this.setState((prevState) => {
      const newState = { ...prevState };
      if (Array.isArray(newState[zone])) {
        const newSubZone = {
          ...prevState[zone][index],
          [prop]: e.target.value,
        };

        newState[zone][index] = newSubZone;
      } else {
        newState[zone] = {
          ...newState[zone],
          [prop]: e.target.value,
        };
      }
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

  removeEntry({ zone, index }) {
    this.setState((prevState) => {
      const newState = { ...prevState };
      newState[zone] = [
        ...newState[zone].slice(0, index),
        ...newState[zone].slice(index + 1),
      ];

      return newState;
    });
  }

  addSkill(e) {
    e.preventDefault();
    this.setState((prevState) => {
      const newState = { ...prevState };
      const newSkills = {
        ...newState.skills,
        saved: [...prevState.skills.saved, prevState.skills.current],
        current: "",
      };
      newState.skills = newSkills;
      return newState;
    });
  }

  removeSkill({ index }) {
    this.setState((prevState) => {
      const newState = { ...prevState };
      const newSkills = { ...newState.skills };
      const newSavedSkills = [
        ...newSkills.saved.slice(0, index),
        ...newSkills.saved.slice(index + 1),
      ];
      newSkills.saved = newSavedSkills;
      newState.skills = newSkills;
      return newState;
    });
  }

  loadExample() {
    this.setState(JSON.parse(JSON.stringify(exampleState)));
  }

  resetForm() {
    this.setState(JSON.parse(JSON.stringify(defaultState)));
  }

  render() {
    return (
      <div>
        <Header />
        <OuterForm state={this.state} handlers={this.handlers} />
        <Preview state={this.state} />
        <Footer />
      </div>
    );
  }
}

export default App;
