import { Header } from "./components/Header";
import { Home } from "./components/Home";

function App() {
  return (
    <>
      <Header />
      <main className="mt-16 bg-blue-400">
        <Home />
      </main>
    </>
  );
}

export default App;
