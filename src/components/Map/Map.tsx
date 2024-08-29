import { useState } from "react";
import MapGL, { NavigationControl } from "react-map-gl/maplibre";
import maplibregl from "maplibre-gl";
import type { Attack } from "../../../common/json-shape";
import { ProvSource, BsAsSource, RutasSource } from "../Sources/Sources";
import { Markers } from "../Markers/Markers";
import type { MapStyle } from "react-map-gl/maplibre";
import mystyle from "./mystyle.json";
import "maplibre-gl/dist/maplibre-gl.css";

const mapSourceStyles = {
  country: {
    fillColor: "#2a364c",
    fillOpacity: 0.6,
    color: "#2b3bcd",
    weight: 0.2,
  },
  provincias: {
    fillColor: "#2a364c",
    color: "#515d86",
    fillOpacity: 1,
  },
  rutas: {
    weight: 2,
    lineColor: "#323a53",
    lineOpacity: 1,
    lineWidth: 2,
  },
};

type Props = {
  setPopupInfo: (attack: Attack) => void;
  sourceData: {
    provincias: unknown;
    departamentosBsAs: unknown;
    rutas: unknown;
  };
  attacksToShow: Attack[];
  colorByAttackType: Record<string, string>;
};

export const RadarMap = ({
  setPopupInfo,
  sourceData,
  attacksToShow,
  colorByAttackType,
}: Props) => {
  const [selectedMarkerId, setSelectedMarkerId] = useState<null | string>(null);
  const { provincias, departamentosBsAs, rutas } = sourceData;

  const mapProps = {
    initialViewState: {
      longitude: -72.0, // Coordenada longitudinal de Argentina
      latitude: -40.0, // Coordenada latitudinal de Argentina
      zoom: 2.7, //zoom inicial
      minZoom: 2, // Nivel mínimo de zoom permitido
      maxZoom: 15, // Nivel máximo de zoom permitido
    },
    style: {
      width: "100vw",
      height: "100vh",
    },
    mapStyle: mystyle as MapStyle,
  };
  return (
    <div
      style={{
        background: "linear-gradient(20deg, #0a0d15, #292f36)",
      }}
    >
      <MapGL
        mapLib={maplibregl}
        {...{
          ...mapProps,
          style: { ...mapProps.style },
        }}
      >
        <ProvSource data={provincias} style={mapSourceStyles.provincias} />
        <BsAsSource data={departamentosBsAs} style={mapSourceStyles.country} />
        <RutasSource data={rutas} style={mapSourceStyles.rutas} />

        {attacksToShow.length !== 0 && (
          <Markers
            attacks={attacksToShow}
            setPopupInfo={setPopupInfo}
            setMarker={setSelectedMarkerId}
            selected={selectedMarkerId}
            colorByAttackType={colorByAttackType}
          />
        )}
        <NavigationControl position="top-right" />
      </MapGL>
    </div>
  );
};
