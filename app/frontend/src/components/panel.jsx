import React, { useEffect, useState } from "react";
import "../components/css/panel.css";
import grafica from "../assets/img/grafica.svg";

export default function Panel() {
  const [data, setData] = useState({});
  const apiUrl = `http://localhost:8000/api/v1/metas`;

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error al obtener datos de la API:", error);
      });
  }, [apiUrl]);

  return (
    <div style={{ width: "100%" }}>
      <div className="d-flex justify-content-center mt-3">
        <h1>Panel de Indicadores</h1>
      </div>
      <div className="d-flex justify-content-center">
        <p style={{ textAlign: "center" }}>
          Aquí puedes visualizar los indicadores propuestos y añadidos por tu
          equipo de trabajo. Si quieres ver más detalles, dale click a uno de
          ellos para más información.
        </p>
      </div>
      <div className="table px-5">
        <div className="row-container">
          <div className="row-header indice">
            <div className="cell">Indicador</div>
            <div className="cell">Descripción</div>
            <div className="cell">Categoria</div>
            <div className="cell">Fecha de Inicio</div>
            <div className="cell">Fecha de Termi.</div>
            <div className="cell">Formulacion</div>
            <div className="cell">Frecuencia</div>
            <div className="cell">Cumplimiento</div>
            <div className="cell">Area</div>
          </div>
        </div>
        <div className="row-container hover ">
          <div className="row ">
            <div className="cell hover">Juan</div>
            <div className="cell tex-descrip">
              <h4 className="descripcion">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
                possimus omnis tenetur reprehenderit in magnam earum
                consequuntur nostrum, laudantium laboriosam iusto distinctio at!
                Quaerat architecto quis ea itaque voluptatibus numquam?
              </h4>
            </div>
            <div className="cell">México</div>
            <div className="cell">México</div>
            <div className="cell">México</div>
            <div className="cell">México</div>
            <div className="cell">México</div>
            <div className="cell">
              <div className="background-container">20%</div>
            </div>
            <div className="cell">México</div>
          </div>
        </div>
      </div>
    </div>
  );
}
