import React, { useState } from "react";
import "./css/reportes.css";

export default function Reportes() {
  const [asunto, setAsunto] = useState("");
  const [especifico, setEspecifico] = useState("");

  return (
    <div className="reportes-container">
      <h2>¿Tienes alguna queja, reclamo o sugerencia?</h2>
      <form className="form-container">
        <div className="inputs-reclamos">
          <div className="input-form-container tareas">
            <label htmlFor="asunto">Asunto:</label>
            <input
              type="text"
              id="asunto"
              value={asunto}
              onChange={(e) => setAsunto(e.target.value)}
            />
          </div>
          <div className="input-form-container tareas">
            <label htmlFor="especifico">
              Sé un poco más específico al respecto:
            </label>
            <textarea
              rows={7}
              id="especifico"
              value={especifico}
              onChange={(e) => setEspecifico(e.target.value)}
            ></textarea>
          </div>
        </div>
      </form>
      <button className="reportes-btn">Enviar</button>
    </div>
  );
}
