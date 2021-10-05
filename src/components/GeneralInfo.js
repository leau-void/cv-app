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
    const zone = "general";
    return (
      <div className="zone zone_general">
        <h2 className="zone__name">Personnal Information</h2>
        {this.props.state.doEdit ? (
          <InnerForm
            state={current}
            handlers={handlers}
            zone={zone}
            placeholders={this.placeholders}
          />
        ) : (
          <Overview state={saved} handlers={handlers} zone={zone} />
        )}
      </div>
    );
  }
}

export default GeneralInfo;
