import { defineStore } from "pinia";

const createId = (): string => {
  if (globalThis.crypto?.randomUUID) {
    return globalThis.crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
};

type ProjectId = string | number;

interface Project {
  id: ProjectId;
  title: string;
  category: string;
  img: string;
}

interface Client {
  id: string;
  title?: string;
  img: string;
}

interface AboutBio {
  id: string;
  bio: string;
}

interface SocialProfile {
  id: string;
  name: string;
  icon: string;
  url: string;
}

interface Category {
  id: string;
  value: string;
  name: string;
}

interface SiteState {
  projectsHeading: string;
  projectsDescription: string;
  projects: Project[];
  clientsHeading: string;
  clients: Client[];
  aboutMe: AboutBio[];
  copyrightDate: number;
  socialProfiles: SocialProfile[];
  categories: Category[];
}

export const useSiteStore = defineStore("site", {
  state: (): SiteState => ({
    projectsHeading: "Projects Portfolio",
    projectsDescription: "Some of the projects I have successfully completed",
    projects: [],
    clientsHeading: "Some of the brands I worked with",
    clients: [],
    aboutMe: [
      {
        id: createId(),
        bio: "Located in the Stockholm area of Sweden, I have more than ten years of experience working with Python on backend applications. I have also some experience in Javascript and frontend technologies. I love working on Open Source projects together with other people from all over the world.",
      },
      {
        id: createId(),
        bio: "I currently work as a core developer on Home Assistant for the Open Home Foundation.",
      },
    ],
    copyrightDate: new Date().getFullYear(),
    socialProfiles: [
      {
        id: createId(),
        name: "GitHub",
        icon: "github",
        url: "https://github.com/MartinHjelmare",
      },
      {
        id: createId(),
        name: "Twitter",
        icon: "twitter",
        url: "https://twitter.com/martinhjelmare",
      },
    ],
    categories: [
      {
        id: createId(),
        value: "web",
        name: "Web Application",
      },
      {
        id: createId(),
        value: "python",
        name: "Python Project",
      },
    ],
  }),
  getters: {
    getProjectById: (state) => (id: ProjectId) => {
      return state.projects.find((project) => project.id == id);
    },
  },
});
