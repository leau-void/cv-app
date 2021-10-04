import React, { Component } from "react";
import GeneralInfo from "./GeneralInfo";
import EducationInfo from "./EducationInfo";
import ProfessionalInfo from "./ProfessionalInfo";

class OuterForm extends Component {
  render() {
    return (
      <div>
        <GeneralInfo />
        <EducationInfo />
        <ProfessionalInfo />
      </div>
    );
  }
}

export default OuterForm;
