import { v4 as uuidv4 } from "uuid";

export const state = () => ({
  projectsHeading: "Projects Portfolio",
  projectsDescription: "Some of the projects I have successfully completed",
  projects: [],
  clientsHeading: "Some of the brands I worked with",
  clients: [],
  aboutMe: [
    {
      id: uuidv4(),
      bio: "Located in the Stockholm area of Sweden, I have more than ten years of experience working with Python on backend applications. I have also some experience in Javascript and frontend technologies. I love working on Open Source projects together with other people from all over the world.",
    },
    {
      id: uuidv4(),
      bio: "I currently work as a core developer on Home Assistant for Nabu Casa Inc.",
    },
  ],
  copyrightDate: new Date().getFullYear(),
  socialProfiles: [
    {
      id: uuidv4(),
      name: "GitHub",
      icon: "github",
      url: "https://github.com/MartinHjelmare",
    },
    {
      id: uuidv4(),
      name: "Twitter",
      icon: "twitter",
      url: "https://twitter.com/martinhjelmare",
    },
  ],
  categories: [
    {
      id: uuidv4(),
      value: "web",
      name: "Web Application",
    },
    {
      id: uuidv4(),
      value: "python",
      name: "Python Project",
    },
  ],
});

export const getters = {
  getProjectById: (state) => (id) => {
    return state.projects.find((project) => project.id == id);
  },
};

export const mutations = {
  // @todo
};

export const actions = {
  // @todo
};
