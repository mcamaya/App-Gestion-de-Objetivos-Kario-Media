import React from "react";

export default function MetasContent({ apiData, tareas, toggleCheckbox }) {
  return (
    <>
      <div className="metas-main-content">
        <div className="meta-title">
          <h2>{apiData.nombre}</h2>
          <h6>Fecha de inicio: {apiData.fechaInicio}</h6>
          <h6>Fecha final: {apiData.fechaFinal}</h6>
        </div>
        <div className="meta-tasks">
          <table className="tasks-table">
            <thead>
              <tr className="metas-table-row">
                <th>ID</th>
                <th>Título</th>
                <th>Asignada</th>
                <th>Horas</th>
                <th>Estado</th>
                <th>Check</th>
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
        <button>Añadir Tarea</button>
      </div>
    </>
  );
}
