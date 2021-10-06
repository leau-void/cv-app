import React, { Component } from "react";
import InnerForm from "./InnerForm";

class EducationInfo extends Component {
  constructor(props) {
    super(props);
    this.placeholders = {
      name: "Institution Name",
      degree: "Degree",
      city: "City",
      from: "From",
      to: "To",
      description: "Further description or achievements",
    };
  }

  render() {
    const { stateArray, handlers } = this.props;
    const zone = "education";
    return (
      <div className="zone zone_education">
        <h2 className="zone__name">Education</h2>
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
                className="button button_add"
                onClick={() => handlers.removeEntry({ zone, index })}
              >
                Remove Entry
              </button>
            </div>
          );
        })}
        <button
          className="button button_remove"
          onClick={() => handlers.addEntry({ zone })}
        >
          Add Entry
        </button>
      </div>
    );
  }
}

export default EducationInfo;
