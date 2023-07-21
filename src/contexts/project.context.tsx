/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { createContext, useEffect, useState } from "react";
import {
  iProjectContextValue,
  iProjectInformation,
  iProjectProviderProps,
} from "./@types";
import { api } from "../services/api";

export const ProjectContext = createContext({} as iProjectContextValue);

export const ProjectProvider = ({ children }: iProjectProviderProps) => {
  const [menu, setMenu] = useState(false);
  const [load, setLoad] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const [projects, setProjects] = useState<iProjectInformation[]>([]);

  useEffect(() => {
    const getAllProjects = async () => {
      try {
        const allProjects = await api.get("/projects");
        setProjects(allProjects.data);
        setLoad(true);
      } catch (error) {
        console.log(error);
        setLoadError(true);
        setLoad(false);
      } finally {
        setLoad(false);
      }
    };

    getAllProjects();
  }, []);

  return (
    <ProjectContext.Provider
      value={{ menu, setMenu, load, loadError, projects }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
