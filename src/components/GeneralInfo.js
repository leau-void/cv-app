import React, { Component } from "react";
import Overview from "./Overview";
import InnerForm from "./InnerForm";

class GeneralInfo extends Component {
  constructor(props) {
    super(props);
    this.placeholders = {
      name: "Full Name",
      title: "Title or Position",
      address: "Adress",
      phone: "Phone",
      email: "Email",
      description: "Description...",
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
            placeholders={this.placeholders}
          />
        ) : (
          <Overview state={saved} handlers={handlers} zone="general" />
        )}
      </div>
    );
  }
}

export default GeneralInfo;
