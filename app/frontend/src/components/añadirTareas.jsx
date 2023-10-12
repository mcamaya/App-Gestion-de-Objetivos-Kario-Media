import React, { cloneElement, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import urlApi from "../data/urlApi";

export default function AñadirTareas({ addNewTask, closeModal }) {
  const history = useHistory();
  const metaId = localStorage.getItem("IDMeta");
  const token = localStorage.getItem("x-auth-token");

  const [dbUsers, setDbUsers] = useState([]);
  const [titulo, setTitulo] = useState("");
  const [instrucciones, setInstrucciones] = useState("");
  const [tiempoHoras, setTiempoHoras] = useState("");
  const [integrantes, setIntegrantes] = useState([]);

  useEffect(() => {
    if (!token) return history.push("/");
    fetch(`${urlApi}/usuarios`)
      .then((res) => res.json())
      .then((data) => {
        let allowedUsers = data.map(({ nombre, _id }) => ({ nombre, _id }));
        setDbUsers(allowedUsers);
      });
  }, []);

  const handlePostTarea = () => {
    const newRegistro = {
      titulo,
      instrucciones,
      tiempoHoras,
      integrantes: [integrantes],
    };
    console.log(newRegistro);
    addNewTask(newRegistro);
  };

  return (
    <div className="fomulario_centrado">
      <h3>Añadir nueva tarea</h3>
      <form className="form-container">
        <div className="inputs-derecha">
          <div className="input-form-container tareas">
            <label htmlFor="titulo">Titulo</label>
            <input
              type="text"
              id="titulo"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
            />
          </div>
          <div className="input-form-container tareas">
            <label htmlFor="instrucciones">Instrucciones</label>
            <textarea
              id="instrucciones"
              name={instrucciones}
              onChange={(e) => setInstrucciones(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="input-izquierda">
          <div className="input-form-container tareas">
            <label htmlFor="tiempoHoras">Tiempo Estimado en Horas</label>
            <input
              type="number"
              id="tiempoHoras"
              value={tiempoHoras}
              onChange={(e) => setTiempoHoras(e.target.value)}
            />
          </div>
          <div className="input-form-container tareas">
            <label htmlFor="integrantes">Responsable</label>
            <select
              id="integrantes"
              value={integrantes}
              onChange={(e) => setIntegrantes(e.target.value)}
            >
              <option value="" disabled>
                Selecione la persona asignada
              </option>
              {dbUsers.map((user, index) => (
                <option key={index} value={user._id}>
                  {user.nombre}
                </option>
              ))}
            </select>
          </div>
        </div>
      </form>
      <div className="centradoBoton">
        <button className="volver-button" onClick={() => closeModal()}>
          Volver
        </button>
        <button className="añadir-button" onClick={(e) => handlePostTarea()}>
          Añadir Tarea
        </button>
      </div>
    </div>
  );
}
