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
          <div className="fixed flex flex-col w-screen items-center bg-green-400 p-3 box-border gap-3 lg:hidden">
            <HeaderButton local="home" title="Início" />
            <HeaderButton local="about" title="Sobre" />
            <HeaderButton local="skills" title="Competências" />
            <HeaderButton local="experience" title="Experências" />
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
