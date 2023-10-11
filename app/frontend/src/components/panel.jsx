import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../components/css/panel.css";
import urlApi from "../data/urlApi";

import incompleta from "../assets/img/grafica-incompleto.svg";
import proceso from "../assets/img/grafica-proceso.svg";
import completa from "../assets/img/grafica-completo.svg";
import formatDate from "../helpers/dateFormating";

export default function Panel() {
  const history = useHistory();
  const token = localStorage.getItem("x-auth-token");
  const [data, setData] = useState([])

  useEffect(() => {
    if (!token) return history.push("/");
    fetch(`${urlApi}/metas`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error al obtener datos de la API:", error);
      });
  }, []);

  const calculatePercentage = (tareas) => {
    if (tareas && tareas.length > 0) {
      const completadas = tareas.filter((tarea) => tarea.check).length;
      const totalTareas = tareas.length;
      const porcentaje = (completadas / totalTareas) * 100;

      return Math.round(porcentaje);
    } else {
      return 0;
    }
  };

  // Guardar la _id en localStorage
  const handleClick = (id) => {
    localStorage.setItem("IDMeta", id);
  };

  return (
    <div style={{ width: "100%" }}>
      <div className="d-flex justify-content-center mt-3">
        <h1 id="text-home" className="ver">Panel de Indicadores</h1>
        <h1 id="text-delete" className="no-ver">seleciona el que quiere borrar</h1>

      </div>
      <div className="d-flex justify-content-center">
        <p id="text-info" style={{ textAlign: "center" }}>
          Aquí puedes visualizar los indicadores propuestos y añadidos por tu
          equipo de trabajo. Si quieres ver más detalles, da clic en uno de
          ellos para obtener más información.
        </p>
      </div>
      <div className="table px-5">
        <div className="row-container">
          <div className="row-header indice">
            <div className="cell">Nombre</div>
            <div className="cell">Descripción</div>
            <div className="cell">Dificultad</div>
            <div className="cell">Fecha de Inicio</div>
            <div className="cell">Fecha de Termino</div>
            <div className="cell">Metodología</div>
            <div className="cell">Cumplimiento</div>
            <div className="cell">Área</div>
          </div>
        </div>
        {data.length > 0 ? (
          data.map((item, index) => (
            <Link id='remover' className="mapped-item" to="/meta-dashboard" onClick={() => handleClick(item._id)}  key={index}>
              <div className="row-container hover">
                <div className="row">
                  <div className="cell hover">{item.nombre}</div>
                  <div className="cell tex-descrip">
                    <h4 className="descripcion">{item.descripcion}</h4>
                  </div>
                  <div className="cell">{item.dificultad}</div>
                  <div className="cell">{formatDate(item.fechaInicio)}</div>
                  <div className="cell">{formatDate(item.fechaFinal)}</div>
                  <div className="cell">{item.metodologia}</div>
                  <div className="cell">
                    <h4
                      style={{
                        backgroundImage:
                          calculatePercentage(item.tareas) > 80
                            ? `url(${completa})`
                            : calculatePercentage(item.tareas) > 40
                            ? `url(${proceso})`
                            : `url(${incompleta})`
                      }}
                      className="background-container"
                    >
                      {calculatePercentage(item.tareas)}%
                    </h4>
                  </div>
                  <div className="cell">{item.area[0].nombre}</div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p>Cargando datos...</p>
        )}
      </div>
        <div className='btn-container'>
          <Link to="/home/formulario">
            <button id='crear-metas'> Añadir Elementos </button>
          </Link>
        </div>
    </div>
  );
}
