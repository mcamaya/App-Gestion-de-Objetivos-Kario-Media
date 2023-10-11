import React, { useState } from "react";
import { Link } from "react-router-dom";
import formatDate from "../helpers/dateFormating";

export default function MetasContent({
  apiData,
  tareas,
  toggleCheckbox,
  deletingTask,
}) {
  const [isDeleting, setIsDeleting] = useState(false);

  return (
    <>
      <div className="metas-main-content">
        <div className="meta-title">
          <h2>{apiData.nombre}</h2>
          <h6>Fecha de inicio: {formatDate(apiData.fechaInicio)}</h6>
          <h6>Fecha final: {formatDate(apiData.fechaFinal)}</h6>
        </div>
        <div className={`meta-tasks ${isDeleting ? "eliminando-layout" : ""}`}>
          <table className="tasks-table">
            <thead>
              <tr className="metas-table-row">
                <th>ID</th>
                <th>Título</th>
                <th>Asignada</th>
                <th>Horas</th>
                <th>Estado</th>
                <th>Check</th>
                <th className={`${isDeleting ? "" : "dont-show"}`}>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {tareas.map((tarea, index) => (
                <tr className="metas-table-row" key={index}>
                  <td>{index + 1}</td>
                  <td>{tarea.titulo}</td>
                  <td>
                    <img
                      src={`${tarea.integranteData.imagen}`}
                      alt=""
                      style={{ marginRight: 10 }}
                      className="tarea-foto-integrante"
                    />{" "}
                    {tarea.integranteData.nombre}
                  </td>
                  <td>{tarea.tiempoHoras}</td>
                  <td>{tarea.check ? "Finalizada" : "Sin terminar"}</td>
                  <td>
                    <input
                      type="checkbox"
                      onChange={() => {
                        toggleCheckbox(tarea._id);
                      }}
                      checked={tarea.check ? true : false}
                    />
                  </td>
                  <td>
                    <button
                      className={`deleting-button ${
                        isDeleting ? "" : "dont-show"
                      }`}
                      onClick={() => {
                        deletingTask(tarea._id);
                      }}
                    >
                      <HiTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="aside">
        <div className="aside-description">
          <h2>Description</h2>
          <h6>{apiData.descripcion}</h6>
        </div>
        <Link to="/meta-dashboard/añadir">
          <button className="añadir-button">Añadir Tarea</button>
        </Link>
        <button
          className="eliminar-button"
          onClick={() => setIsDeleting(!isDeleting)}
        >
          Eliminar Tareas
        </button>
      </div>
    </>
  );
}
