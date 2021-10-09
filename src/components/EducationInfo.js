import React, { Component } from "react";
import InnerForm from "./InnerForm";

const EducationInfo = (props) => {
  const { stateArray, handlers } = props;
  const zone = "education";
  const placeholders = {
    school: "Institution Name",
    degree: "Degree",
    city: "City",
    from: "From",
    to: "To",
  };

  return (
    <div className="zone zone_education">
      <h2 className="zone__name">Education</h2>
      <small>Add up to 3 educational experiences.</small>
      {stateArray.map((state, index) => {
        return (
          <div className="zone__entry" key={index}>
            <InnerForm
              {...{
                state,
                handlers,
                zone,
                placeholders,
                index,
              }}
            />

            <button
              className="button button_remove"
              onClick={() => handlers.removeEntry({ zone, index })}>
              Remove Entry
            </button>
          </div>
        );
      })}
      <button
        className="button button_add"
        onClick={() => handlers.addEntry({ zone })}>
        {stateArray.length >= 3 ? (
          <span
            className="button__block"
            onClick={(e) => e.stopPropagation()}></span>
        ) : null}
        Add Entry
      </button>
    </div>
  );
};

export default EducationInfo;
