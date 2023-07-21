import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ProjectProvider } from "./contexts/project.context.tsx";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ProjectProvider>
      <App />
    </ProjectProvider>
  </React.StrictMode>
);
