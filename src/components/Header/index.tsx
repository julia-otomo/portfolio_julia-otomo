/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext } from "react";
import { ProjectContext } from "../../contexts/project.context";
import { HeaderButton } from "./buttonHeader";
import { LuMenu } from "react-icons/lu";
import { MdOutlineClose } from "react-icons/md";

export const Header = () => {
  const { menu, setMenu } = useContext(ProjectContext);

  return (
    <>
      <header className="h-16 bg-red-400 flex flex-row items-center justify-center fixed top-0 w-screen">
        <div className="flex flex-row justify-between w-4/5">
          <h1>Julia Duarte</h1>

          <div className="hidden lg:flex lg:flex-row lg:gap-4">
            <HeaderButton local="home" title="Início" />
            <HeaderButton local="about" title="Sobre" />
            <HeaderButton local="skills" title="Competências" />
            <HeaderButton local="experience" title="Experências" />
            <HeaderButton local="projects" title="Projetos" />
            <HeaderButton local="contact" title="Contato" />
          </div>

          <button onClick={() => setMenu(!menu)} className="block lg:hidden">
            {menu ? <MdOutlineClose /> : <LuMenu />}
          </button>
        </div>
      </header>
    </>
  );
};
