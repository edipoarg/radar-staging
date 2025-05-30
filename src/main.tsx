import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import RedRadar from "./components/RedRadar/RedRadar";
import Investigaciones from "./components/Investigaciones/Investigaciones";
import Root from "./routes/Root";
import Navlinks from "./routes/index";
import { fetchUrlsData } from "./helpers/fetchUrlsData";
import Landing from "./components/Landing/Landing";
import QueHacemos from "./components/QueHacemos/QueHacemos";
import Presentacion from "./components/QueHacemos/Presentacion/Presentacion";
import Definiciones from "./components/QueHacemos/Definiciones/Definiciones";
import PatronDeCasos from "./components/QueHacemos/PatronDeCasos/PatronDeCasos";
import Metodologia from "./components/QueHacemos/Metodologia/Metodologia";
import Novedades from "./components/Novedades/Novedades";

const loader = async () => ({
  urls: await fetchUrlsData({
    departamentosBsAs: "data/mapsData/departamentos-buenos_aires.json",
    provincias: "data/mapsData/provincias.json",
    rutas: "data/mapsData/rutas.json",
    ataques: "data/ataques.json",
  }),
});

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: Navlinks.home, element: <Landing />, loader },
      { path: Navlinks.queHacemos, element: <QueHacemos /> },
      { path: Navlinks.presentacion, element: <Presentacion /> },
      { path: Navlinks.definiciones, element: <Definiciones /> },
      { path: Navlinks.patronDeCasos, element: <PatronDeCasos /> },
      { path: Navlinks.metodologia, element: <Metodologia /> },
      { path: Navlinks.novedades, element: <Novedades /> },
      { path: Navlinks.investigaciones, element: <Investigaciones /> },
      { path: Navlinks.redRadar, element: <RedRadar /> },
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
