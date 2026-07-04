import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { ProjectDetail } from "./pages/ProjectDetail";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
      </Routes>
      <footer className="site-footer">
        <p>&copy; {new Date().getFullYear()} Ryan Gano</p>
      </footer>
    </>
  );
}

export default App;
