import "./styles/normalize.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Preview from "./components/Preview";
import OuterForm from "./components/OuterForm";
import getDefault from "./data/getDefault";
import getExample from "./data/getExample";

const App = () => {
  const [general, setGeneral] = useState(getDefault("general"));
  const [professional, setProfessional] = useState(getDefault("professional"));
  const [education, setEducation] = useState(getDefault("education"));
  const [skills, setSkills] = useState(getDefault("skills"));

  const state = { general, professional, education, skills };
  const setState = {
    general: setGeneral,
    professional: setProfessional,
    education: setEducation,
    skills: setSkills,
  };

  const handlers = {
    fetchInput: ({ e, prop, zone, index }) => {
      let newZone;
      if (Array.isArray(state[zone])) {
        newZone = [...state[zone]];
        const newSubZone = {
          ...state[zone][index],
          [prop]: e.target.value,
        };
        newZone[index] = newSubZone;
      } else {
        newZone = { ...state[zone], [prop]: e.target.value };
      }

      setState[zone](newZone);
    },
    clearInput: ({ zone, index }) => {
      let newZone;
      if (Array.isArray(state[zone])) {
        newZone = [...state[zone]];
        const newSubZone = { ...getDefault(zone)[0] };
        newZone[index] = newSubZone;
      } else {
        newZone = { ...getDefault(zone) };
      }

      setState[zone](newZone);
    },
    addEntry: ({ zone }) => {
      const newZone = [...state[zone], getDefault(zone)[0]];
      setState[zone](newZone);
    },
    removeEntry: ({ zone, index }) => {
      const newZone = [
        ...state[zone].slice(0, index),
        ...state[zone].slice(index + 1),
      ];
      setState[zone](newZone);
    },
    addSkill: (e) => {
      e.preventDefault();
      const newZone = {
        saved: [...state.skills.saved, state.skills.current],
        current: "",
      };

      setSkills(newZone);
    },
    removeSkill: ({ index }) => {
      const newZone = {
        saved: [
          ...state.skills.saved.slice(0, index),
          ...state.skills.saved.slice(index + 1),
        ],
        current: state.skills.current,
      };

      setSkills(newZone);
    },

    loadExample: () => {
      setGeneral(getExample("general"));
      setProfessional(getExample("professional"));
      setEducation(getExample("education"));
      setSkills(getExample("skills"));
    },

    resetForm: () => {
      setGeneral(getDefault("general"));
      setProfessional(getDefault("professional"));
      setEducation(getDefault("education"));
      setSkills(getExample("skills"));
    },
  };

  return (
    <div>
      <Header />
      <OuterForm {...{ state, handlers }} />
      <Preview {...{ state }} />
      <Footer />
    </div>
  );
};

export default App;
