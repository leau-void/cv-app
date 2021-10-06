const defaultState = {
  general: {
    name: "",
    title: "",
    address: "",
    phone: "",
    email: "",
    description: "",
  },
  professional: [
    {
      position: "",
      company: "",
      city: "",
      from: "",
      to: "",
      description: "",
    },
  ],
  education: [
    {
      name: "",
      degree: "",
      city: "",
      from: "",
      to: "",
      description: "",
    },
  ],
  skills: {
    current: "",
    saved: [],
  },
};

export default defaultState;
