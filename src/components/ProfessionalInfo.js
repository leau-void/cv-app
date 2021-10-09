import React from "react";
import InnerForm from "./InnerForm";

const ProfessionalInfo = (props) => {
  const { stateArray, handlers } = props;
  const zone = "professional";
  const placeholders = {
    title: "Position",
    company: "Company Name",
    city: "City",
    from: "From",
    to: "To",
  };

  return (
    <div className="zone zone_professional">
      <h2 className="zone__name">Professional Experience</h2>
      <small>Add up to 3 professional experiences.</small>

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

export default ProfessionalInfo;
