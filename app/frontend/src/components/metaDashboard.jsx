import React, { useEffect, useState, Suspense, lazy } from "react";
import { useHistory, useLocation } from "react-router-dom";
import urlApi from "../data/urlApi.js";
import "./css/metaDashboard.css";
const MetasContent = lazy(() => import("./metasContent.jsx"));

export default function MetaDashboard() {
  const metaId = localStorage.getItem("IDMeta");
  const token = localStorage.getItem("x-auth-token");
  const history = useHistory();

  const [apiData, setApiData] = useState({});
  const [tareas, setTareas] = useState([]);
  const [error, setError] = useState({});

  useEffect(() => {
    if (!token) return history.push("/login");
    fetch(`${urlApi}/metas/${metaId}`, {
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

  const toggleCheckbox = (tareaId) => {
    let newTareas = [...tareas];
    let editado = newTareas.find((t) => t._id == tareaId);
    let index = newTareas.findIndex((t) => t._id == tareaId);
    if (
      window.confirm(
        `Seguro que desea marcar la tarea como ${
          editado.check ? "INCOMPLETA" : "COMPLETADA"
        }?`
      )
    ) {
      editado["check"] = !editado["check"];
      newTareas.splice(index, 1, editado);
      console.log(tareas, newTareas);

      newTareas.forEach((e, i) => {
        delete newTareas[i].integranteData;
        delete newTareas[i]._id;
      });

      fetch(`${urlApi}/metas/add-tasks/${metaId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify({ tareas: newTareas }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .finally(() => window.location.reload())
        .catch((err) => alert(err));
    }
  };

  return (
    <div className="metas-container">
      <Suspense fallback={<Loading />}>
        <MetasContent
          apiData={apiData}
          tareas={tareas}
          toggleCheckbox={toggleCheckbox}
        />
      </Suspense>
    </div>
  );
}

function Loading() {
  return (
    <div style={{ backgroundColor: "red" }}>
      <h2>🌀 Loading...</h2>
    </div>
  );
}
