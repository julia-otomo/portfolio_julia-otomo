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
    <div className="flex flex-col items-center bg-orange-400" id="projects">
      <div className="w-4/5 flex flex-col items-center gap-5 p-4 border-box">
        <h2>PROJETOS</h2>
        {load ? (
          <div>
            <img src={loading} alt="" />
            <p>Carregando</p>
          </div>
        ) : loadError ? (
          <div>
            <img src={loadingError} alt="" />
            <p>
              Oh no ! Tente recarregar a página algumas vezes T-T. O Render está
              acordando ainda.
            </p>
          </div>
        ) : (
          <div>
            <ul className="flex flex-col items-center gap-5">
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
            <button onClick={() => setMoreProjects(!moreProjects)}>
              {moreProjects ? "Ver mais projetos" : "Reduzir projetos"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
