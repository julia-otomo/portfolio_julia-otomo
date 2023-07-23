import { useContext } from "react";
import { AboutMe } from "./components/About";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Skills } from "./components/Skills";
import { ProjectContext } from "./contexts/project.context";
import { HeaderButton } from "./components/Header/buttonHeader";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  const { menu } = useContext(ProjectContext);
  return (
    <>
      <Header />
      <main className="mt-16 bg-pink-500">
        {!menu ? null : (
          <div
            className={`fixed z-10 flex flex-col gap-5 top-16 left-0 w-full bg-pink-400 p-3 box-border gap-3 items-center lg:hidden transform transition-transform transition-opacity ${
              menu
                ? "translate-y-0 opacity-100 animate-fade-down"
                : "translate-y-full opacity-0"
            }`}
          >
            <HeaderButton local="home" title="Início" />
            <HeaderButton local="about" title="Sobre" />
            <HeaderButton local="skills" title="Competências" />
            <HeaderButton local="experience" title="Experência" />
            <HeaderButton local="projects" title="Projetos" />
            <HeaderButton local="contact" title="Contato" />
          </div>
        )}
        <Home />
        <AboutMe />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
