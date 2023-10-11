import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import urlApi from "../data/urlApi";

export default function AñadirTareas() {
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

  const añadirNuevaTarea = (e) => {
    e.preventDefault();

  }

  return (
    <div>
      <form onSubmit={(e) => añadirNuevaTarea()}>
        <div className="input-group">
          <label htmlFor="titulo">Titulo</label>
          <input
            type="text"
            id="titulo"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="instrucciones">Instrucciones</label>
          <textarea
            id="instrucciones"
            name={instrucciones}
            onChange={(e) => setInstrucciones(e.target.value)}
          ></textarea>
        </div>
        <div className="input-group">
          <label htmlFor="tiempoHoras">Tiempo Estimado en Horas</label>
          <input
            type="number"
            id="tiempoHoras"
            value={tiempoHoras}
            onChange={(e) => setTiempoHoras(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="integrantes">Responsable</label>
          <select
            id="integrantes"
            value={integrantes}
            onChange={(e) => setIntegrantes(e.target.value)}
          >
            <option value="" disabled>Selecione la persona asignada</option>
            {
              dbUsers.map((user, index) => (
                <option key={index} value={user._id}>{user.nombre}</option>
              ))
            }
          </select>
        </div>
          <button type="submit">Guardar</button>
      </form>
    </div>
  );
}
