import React, { Component } from "react";
import Overview from "./Overview";
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
    return (
      <div className="zone zone_education">
        <h2 className="zone__name">Education</h2>
        {stateArray.map((state, index) => {
          const { current, saved } = state;
          return (
            <div key={index}>
              {state.doEdit ? (
                <InnerForm
                  state={current}
                  handlers={handlers}
                  zone="education"
                  placeholders={this.placeholders}
                  index={index}
                />
              ) : (
                <Overview
                  state={saved}
                  handlers={handlers}
                  zone="education"
                  index={index}
                />
              )}
              <button
                className="button button_add"
                onClick={() =>
                  handlers.removeEntry({ zone: "education", index })
                }
              >
                Remove Entry
              </button>
            </div>
          );
        })}
        <button
          className="button button_remove"
          onClick={() => handlers.addEntry({ zone: "education" })}
        >
          Add Entry
        </button>
      </div>
    );
  }
}

export default EducationInfo;
