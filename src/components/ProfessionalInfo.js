import React, { Component } from "react";
import InnerForm from "./InnerForm";

class ProfessionalInfo extends Component {
  constructor(props) {
    super(props);
    this.placeholders = {
      position: "Position",
      company: "Company Name",
      city: "City",
      from: "From",
      to: "To",
      description: "Further description or achievements",
    };
  }

  render() {
    const { stateArray, handlers } = this.props;
    const zone = "professional";

    return (
      <div className="zone zone_professional">
        <h2 className="zone__name">Professional Experience</h2>
        <small>Add up to 3 professional experiences.</small>

        {stateArray.map((state, index) => {
          return (
            <div key={index}>
              <InnerForm
                state={state}
                handlers={handlers}
                zone={zone}
                placeholders={this.placeholders}
                index={index}
              />

              <button
                className="button button_remove"
                onClick={() => handlers.removeEntry({ zone, index })}
              >
                Remove Entry
              </button>
            </div>
          );
        })}
        <button
          className="button button_add"
          onClick={() => handlers.addEntry({ zone })}
        >
          {stateArray.length >= 3 ? (
            <span
              className="button__block"
              onClick={(e) => e.stopPropagation()}
            ></span>
          ) : null}
          Add Entry
        </button>
      </div>
    );
  }
}

export default ProfessionalInfo;
