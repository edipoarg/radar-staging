import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import { loader as getURLs } from "./components/Loader.jsx";

import { createHashRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import Main2 from "./components/Main2";
import Conecta from "./components/Conecta";
import Notas from "./components/Notas.jsx";
import Reporta from "./components/Reporta";

import Root from "./routes/Root.jsx";
import Navlinks from "./routes/index.js";

const App = lazy(() => import("./App.jsx"));

const loader = async () => ({
  urls: await getURLs({
    departamentos: "data/mapsData/departamentos-argentina.json",
    departamentosBsAs: "data/mapsData/departamentos-buenos_aires.json",
    provincias: "data/mapsData/provincias.json",
    rutas: "data/mapsData/rutas.json",
    casos: "data/casos.json",
  }),
});

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: Navlinks.home, element: <App />, loader },
      { path: Navlinks.conecta, element: <Conecta /> },
      { path: Navlinks.reporta, element: <Reporta /> },
      { path: Navlinks.notas, element: <Notas /> },
      { path: Navlinks.main2, element: <Main2 /> },
    ],
  },
]);

const root = document.getElementById("root");

if (root)
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  );
