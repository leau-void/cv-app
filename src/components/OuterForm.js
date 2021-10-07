import "../styles/outer-form.css";
import "../styles/zone.css";
import "../styles/button.css";
import React, { Component } from "react";
import GeneralInfo from "./GeneralInfo";
import EducationInfo from "./EducationInfo";
import ProfessionalInfo from "./ProfessionalInfo";
import Skills from "./Skills";

class OuterForm extends Component {
  render() {
    const { state, handlers } = this.props;
    return (
      <div className="outer-form">
        <GeneralInfo state={state.general} handlers={handlers} />
        <ProfessionalInfo stateArray={state.professional} handlers={handlers} />
        <EducationInfo stateArray={state.education} handlers={handlers} />
        <Skills state={state.skills} handlers={handlers} />

        <button
          className="button button_example"
          onClick={handlers.loadExample}>
          Load Example
        </button>
        <button className="button button_reset" onClick={handlers.resetForm}>
          Reset
        </button>
      </div>
    );
  }
}

export default OuterForm;
