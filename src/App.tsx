import { AboutMe } from "./components/About";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Skills } from "./components/Skills";

function App() {
  return (
    <>
      <Header />
      <main className="mt-16 ">
        <Home />
        <AboutMe />
        <Skills />
      </main>
    </>
  );
}

export default App;
