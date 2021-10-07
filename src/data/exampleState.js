const exampleState = {
  general: {
    name: "Jane Doe",
    title: "Software Engineer",
    address: "123 Main St., Toronto, CA",
    phone: "(123) 456-7890",
    email: "jane_doe@example.com",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae est egestas, ultrices metus vitae, scelerisque nisl. Duis fermentum semper nunc sed lacinia. Phasellus in purus efficitur, aliquet libero ut, eleifend nisl. Sed vel ex faucibus, faucibus ante eu, ultrices quam vel.",
  },

  professional: [
    {
      title: "Senior Software Engineer",
      company: "Google LLC.",
      city: "Mountain View, CA",
      from: "2019",
      to: "Present",
    },
    {
      title: "Lead Software Engineer",
      company: "Mozilla Fdn.",
      city: "Mountain View, CA",
      from: "2016",
      to: "2019",
    },
    {
      title: "Lead Software Engineer",
      company: "Cisco Systems, Inc.",
      city: "San Jose, CA",
      from: "2012",
      to: "2016",
    },
  ],

  education: [
    {
      school: "Caltech",
      degree: "PhD in Computer Science",
      city: "Pasadena, CA",
      from: "2013",
      to: "2018",
    },
    {
      school: "Caltech",
      degree: "MSc in Computer Science",
      city: "Pasadena, CA",
      from: "2011",
      to: "2013",
    },
    {
      school: "Caltech",
      degree: "BCS in Computer Science",
      city: "Pasadena, CA",
      from: "2008",
      to: "2011",
    },
  ],

  skills: {
    current: "",
    saved: ["C++", "C#", "C", "Haskel", "COBOL"],
  },
};

export default exampleState;
