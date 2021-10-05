import React, { Component } from "react";
import GeneralInfo from "./GeneralInfo";
import EducationInfo from "./EducationInfo";
import ProfessionalInfo from "./ProfessionalInfo";

class OuterForm extends Component {
  render() {
    const { state, handlers } = this.props;
    return (
      <div>
        <GeneralInfo state={state.general} handlers={handlers} />
        <EducationInfo stateArray={state.education} handlers={handlers} />
        <ProfessionalInfo stateArray={state.professional} handlers={handlers} />
      </div>
    );
  }
}

export default OuterForm;
