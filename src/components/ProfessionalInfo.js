import React, { Component } from "react";
import Overview from "./Overview";
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
        {stateArray.map((state, index) => {
          const { current, saved } = state;
          return (
            <div key={index}>
              {state.doEdit ? (
                <InnerForm
                  state={current}
                  handlers={handlers}
                  zone={zone}
                  placeholders={this.placeholders}
                  index={index}
                />
              ) : (
                <Overview
                  state={saved}
                  handlers={handlers}
                  zone={zone}
                  index={index}
                />
              )}
              <button onClick={() => handlers.removeEntry({ zone, index })}>
                Remove Entry
              </button>
            </div>
          );
        })}
        <button onClick={() => handlers.addEntry({ zone })}>Add Entry</button>
      </div>
    );
  }
}

export default ProfessionalInfo;
