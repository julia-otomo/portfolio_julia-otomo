import { useContext } from "react";
import { ProjectContext } from "../../contexts/project.context";
import loading from "../../assets/loading.gif";
import loadingError from "../../assets/giphy1.gif";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const { projects, load, loadError, moreProjects, setMoreProjects } =
    useContext(ProjectContext);

  const projectsReduced = projects.slice(0, 4);

  const projectsArray = moreProjects ? projectsReduced : projects;
  return (
    <div className="flex flex-col items-center bg-orange-100" id="projects">
      <div className="w-4/5 flex flex-col items-center gap-8 p-4 border-box mt-6 mb-6">
        <h2 className="text-center text-2xl font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          PROJETOS
        </h2>
        {load ? (
          <div className="flex flex-col items-center gap-3 justify-center">
            <img src={loading} alt="" className="w-48" />
            <p className="text-center w-4/5 font-medium text-purple-900  text-xl">
              Carregando...
            </p>
          </div>
        ) : loadError ? (
          <div className="flex flex-col items-center gap-3">
            <img src={loadingError} alt="" className="w-48" />
            <p className="text-center w-4/5 font-medium text-purple-900  text-xl">
              Oh no ! Tente recarregar a página algumas vezes T-T. O Render está
              acordando ainda.
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-5 items-center">
            <ul className="flex flex-row flex-wrap  justify-center gap-5 w-full ">
              {projectsArray.map((project) => (
                <ProjectCard
                  id={project.id}
                  title={project.title}
                  year={project.year}
                  description={project.description}
                  githubPage={project.githubPage}
                  image={project.image}
                  vercelPage={project.vercelPage}
                  languages={project.languages}
                  key={project.id}
                />
              ))}
            </ul>
            <button
              onClick={() => setMoreProjects(!moreProjects)}
              className="text-center bg-violet-50 rounded-3xl w-11/12 max-w-button p-2 border-box font-medium text-violet-900 border-4 border-violet-900 text-lg hover:bg-violet-900 hover:text-slate-50 shadow-inner shadow-neon-purple transition duration-2000"
            >
              {moreProjects ? "Ver mais projetos" : "Reduzir projetos"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
