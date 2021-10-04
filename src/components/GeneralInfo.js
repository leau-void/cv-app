import React, { Component } from "react";
import Overview from "./Overview";
import InnerForm from "./InnerForm";

class GeneralInfo extends Component {
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
    const {
      state: { current, saved },
      handlers,
    } = this.props;
    return (
      <div>
        {this.props.state.doEdit ? (
          <InnerForm
            state={current}
            handlers={handlers}
            zone="general"
            inputs={this.inputs}
          />
        ) : (
          <Overview state={saved} handlers={handlers} zone="general" />
        )}
      </div>
    );
  }
}

export default GeneralInfo;
