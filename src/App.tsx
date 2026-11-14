import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import V2App from "./v2/V2App";
// Shared by both sites: the résumé page's styles live here.
import "./App.css";

// The classic site lives under /v1 and loads only when visited.
const ClassicApp = lazy(() => import("./ClassicApp"));

function App() {
  return (
    <Routes>
      <Route
        path="/v1/*"
        element={
          <Suspense fallback={null}>
            <ClassicApp />
          </Suspense>
        }
      />
      <Route path="/*" element={<V2App />} />
    </Routes>
  );
}

export default App;
