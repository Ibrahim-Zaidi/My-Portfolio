type PersonalInfo = {
  name: string;
  profiles: {
    github: string;
    linkedin: string;
    twitter: string;
    email: string;
  };
};

const MyPersonalInfo: PersonalInfo = {
  name: "Ibrahim Zaidi",
  profiles: {
    github: "https://github.com/Ibrahim-Zaidi",
    linkedin: "https://www.linkedin.com/in/ibrahim-zaidi-512a80243/",
    twitter: "https://twitter.com/ibrahimzaidi",
    email: "ibrahim.zaidi@univ-alger.dz",
  },
};

export default MyPersonalInfo;
