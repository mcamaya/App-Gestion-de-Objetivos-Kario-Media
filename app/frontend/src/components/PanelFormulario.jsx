import React, {useState, useEffect} from "react";
import axios from "axios";
import {useHistory} from 'react-router-dom';

const Formulario = () => {
  let history = useHistory();

  const [nombre, Setnombre] = useState("");
  const [descripcion, Setdescripcion] = useState("");
  const [dificultad, Setdificultad] = useState("");
  const [fechaInicio, SetfechaInicio] = useState("");
  const [fechaFinal, SetfechaFinal] = useState("");
  const [metodologia, Setmetodologia] = useState("");
  const [cumplimiento, Setcumplimiento] = useState("");
  const [area, Setarea] = useState("");
  const [areas, SetAreas] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/v1/areas`)
      .then(response => {
        const extractedAreas = response.data.map(({ _id, nombre, estado }) => ({ _id, nombre, estado }));
        SetAreas(extractedAreas);
      });
  }, []);   

  const postData = ()=>{
    const token = localStorage.getItem("x-auth-token");

    const headers = {
      "x-auth-token": token,
    };

    const cumplimientoNumber = Number(cumplimiento)

    axios.post(`http://localhost:8000/api/v1/metas`,
    {
      nombre,
      descripcion,
      dificultad,
      fechaInicio,
      fechaFinal,
      metodologia,
      cumplimiento: cumplimientoNumber,
      area,
    },
    {
      headers: headers,
    }
    ).then(()=>{
      history.push('/home')
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    postData();
  }

  return (
    <div>
      <form className='create-form' onSubmit={handleSubmit}>
        <div>
          <label>nombre</label>
          <input type="text" placeholder='nombre' value={nombre} onChange={(e) => Setnombre(e.target.value)} />
        </div>
        <div>
          <label>descripcion</label>
          <input type="text" placeholder='descripcion' value={descripcion} onChange={(e) => Setdescripcion(e.target.value)} />
        </div>
        <div>
          <label>dificultad</label>
          <select name="dificultad" id="dificultad" value={dificultad} onChange={(e) => Setdificultad(e.target.value)}>
            <option value="" disabled> . . . </option>
            <option value="Baja">Baja</option>
            <option value="Media">Media</option>
            <option value="Alta">Alta</option>
          </select>
        </div>
        <div>
          <label>fechaInicio</label>
          <input type="date" placeholder='fechaInicio' value={fechaInicio} onChange={(e) => SetfechaInicio(e.target.value)} />
        </div>
        <div>
          <label>fechaFinal</label>
          <input type="date" placeholder='fechaFinal' value={fechaFinal} onChange={(e) => SetfechaFinal(e.target.value)} />
        </div>
        <div>
          <label>metodologia</label>
          <input type="text" placeholder='metodologia' value={metodologia} onChange={(e) => Setmetodologia(e.target.value)} />
        </div>
        <div>
          <label>area</label>
          <select value={area} onChange={(e) => Setarea(e.target.value)}>
            <option value="" disabled>Selecciona un área</option>
            {areas.map(area => (
              <option key={area._id} value={area._id}>
                {area.nombre}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
};

export default Formulario;
