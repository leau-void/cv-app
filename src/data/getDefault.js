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
      title: "",
      company: "",
      city: "",
      from: "",
      to: "",
    },
  ],
  education: [
    {
      school: "",
      degree: "",
      city: "",
      from: "",
      to: "",
    },
  ],

  skills: {
    current: "",
    saved: [],
  },
};

const getDefault = (zone) => {
  if (zone) return JSON.parse(JSON.stringify(defaultState[zone]));
};

export default getDefault;
