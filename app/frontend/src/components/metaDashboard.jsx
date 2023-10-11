import React, { useEffect, useState, Suspense } from "react";
import { useHistory } from "react-router-dom";
import urlApi from "../data/urlApi.js";
import "./css/metaDashboard.css";

export default function MetaDashboard() {
  const idMeta = "6525fbc1b488a0d890f7e2c3";
  const history = useHistory();
  const [apiData, setApiData] = useState({});
  const [tareas, setTareas] = useState([]);

  console.log(apiData);
  const token = localStorage.getItem("x-auth-token");

  useEffect(() => {
    if (!token) return history.push("/login");
    fetch(`${urlApi}/metas/${idMeta}`, {
      method: "GET",
      headers: {
        "x-auth-token": token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setApiData(data);
        setTareas(data.tareas);
      })
      .catch((err) => console.log(err));
  }, []);

  const lookForIntegrante = async (iduser) => {
    const response = await fetch(`${urlApi}/usuarios/${iduser}`, {
      method: "GET",
      headers: {
        "x-auth-token": token,
      },
    });
    const { imagen } = await response.json();
    console.log(imagen);
    return imagen;
  };

  return (
    <div className="metas-container">
      <Suspense fallback="Loading...">
        <div className="metas-main-content">
          <div className="meta-title">
            <h2>{apiData.nombre}</h2>
            <h6>{apiData.descripcion}</h6>
          </div>
          <div className="meta-tasks">
            <table className="tasks-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Título</th>
                  <th>Asignada</th>
                  <th>Tiempo Hr</th>
                  <th>Estado</th>
                </tr>
              </thead>
              <tbody>
                {tareas.map((tarea, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{tarea.titulo}</td>
                    <td>
                      <img
                        src={`${(async () =>
                          await lookForIntegrante(tarea.integrantes[0]))()}`}
                        alt=""
                      />
                    </td>
                    <td>{tarea.tiempoHoras}</td>
                    <td>{tarea.check ? "Finalizada" : "Sin terminar"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Suspense>
      <div className="aside">
        <div className="aside-description">
          <h2>Description</h2>
          <h6>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum,
            sed, enim fuga libero, natus provident dignissimos ullam impedit
            porro omnis doloremque maiores? Laboriosam saepe natus, alias nemo
            hic perspiciatis cum!
          </h6>
        </div>
        <button>Añadir Tarea</button>
      </div>
    </div>
  );
}
