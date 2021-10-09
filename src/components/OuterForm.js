import "../styles/outer-form.css";
import "../styles/zone.css";
import "../styles/button.css";
import React from "react";
import GeneralInfo from "./GeneralInfo";
import EducationInfo from "./EducationInfo";
import ProfessionalInfo from "./ProfessionalInfo";
import Skills from "./Skills";

const OuterForm = (props) => {
  const { state, handlers } = props;
  return (
    <div className="outer-form">
      <GeneralInfo {...{ state: state.general, handlers }} />
      <ProfessionalInfo {...{ stateArray: state.professional, handlers }} />
      <EducationInfo {...{ stateArray: state.education, handlers }} />
      <Skills {...{ state: state.skills, handlers }} />

      <button className="button button_example" onClick={handlers.loadExample}>
        Load Example
      </button>
      <button className="button button_reset" onClick={handlers.resetForm}>
        Reset
      </button>
    </div>
  );
};

export default OuterForm;
