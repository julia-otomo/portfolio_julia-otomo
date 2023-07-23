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
      <header
        className="h-16 flex flex-row items-center justify-center fixed top-0 w-screen bg-gradient-to-r from-pink-400  via-violet-400 to-sky-400 
      shadow-lg z-10"
        style={{ height: "70px" }}
      >
        <div className="flex flex-row justify-between items-center w-4/5 h-full ">
          <h1 className="text-lg font-medium text-slate-50">Julia Duarte</h1>

          <div className="hidden lg:flex lg:flex-row lg:gap-4">
            <HeaderButton local="home" title="Início" />
            <HeaderButton local="about" title="Sobre" />
            <HeaderButton local="skills" title="Competências" />
            <HeaderButton local="experience" title="Experência" />
            <HeaderButton local="projects" title="Projetos" />
            <HeaderButton local="contact" title="Contato" />
          </div>

          <button onClick={() => setMenu(!menu)} className="block lg:hidden">
            {menu ? (
              <MdOutlineClose className="fill-slate-50 w-6 h-6" />
            ) : (
              <LuMenu className="fill-slate-50 stroke-slate-50 w-6 h-6" />
            )}
          </button>
        </div>
      </header>
    </>
  );
};
