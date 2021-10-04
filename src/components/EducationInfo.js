import React, { Component } from "react";
import Overview from "./Overview";
import InnerForm from "./InnerForm";

class EducationInfo extends Component {
  constructor(props) {
    super(props);
    this.inputs = {
      placeholders: {
        name: "Jane Doe",
        title: "Software Engineer",
        address: "123 Main St., Toronto, CA",
        phone: "(123) 456-7890",
        email: "jane_doe@example.com",
        description: "Description...",
      },
      except: ["description"],
    };
  }

  render() {
    const { stateArray, handlers } = this.props;
    return (
      <div>
        {stateArray.map((state, index) => {
          const { current, saved } = state;
          return (
            <div>
              {state.doEdit ? (
                <InnerForm
                  state={current}
                  handlers={handlers}
                  zone="education"
                  inputs={this.inputs}
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
            </div>
          );
        })}
      </div>
    );
  }
}

export default EducationInfo;
