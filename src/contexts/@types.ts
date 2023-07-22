import { ReactNode } from "react";

export interface iProjectProviderProps {
  children: ReactNode;
}

export interface iProjectInformation {
  id: string;
  title: string;
  description: string;
  year: number;
  image?: string;
  githubPage: string;
  vercelPage?: string;
  languages: iLanguagesInformation[];
}

export interface iLanguagesInformation {
  id: string;
  name: string;
}

export interface iProjectContextValue {
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
  load: boolean;
  loadError: boolean;
  projects: iProjectInformation[];
  moreProjects: boolean;
  setMoreProjects: React.Dispatch<React.SetStateAction<boolean>>;
}
