import React, { Component } from "react";
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
    const { state, handlers } = this.props;
    const zone = "general";
    return (
      <div className="zone zone_general">
        <h2 className="zone__name">Personnal Information</h2>
        <InnerForm
          state={state}
          handlers={handlers}
          zone={zone}
          placeholders={this.placeholders}
        />
      </div>
    );
  }
}

export default GeneralInfo;
