import React, { Component } from "react";
import InnerForm from "./InnerForm";

const GeneralInfo = (props) => {
  const { state, handlers } = props;
  const zone = "general";
  const placeholders = {
    name: "Full Name",
    title: "Title or Position",
    address: "Address",
    phone: "Phone",
    email: "Email",
    description: "Description...",
  };

  return (
    <div className="zone zone_general">
      <h2 className="zone__name">Personnal Information</h2>
      <InnerForm
        {...{
          state,
          handlers,
          zone,
          placeholders,
        }}
      />
    </div>
  );
};

export default GeneralInfo;
