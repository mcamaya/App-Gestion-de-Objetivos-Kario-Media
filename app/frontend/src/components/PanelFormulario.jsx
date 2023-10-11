import React, {useState} from "react";
import axios from "axios";
import {useHistory} from 'react-router-dom';

const Formulario = () => {
  let history = useHistory();

  const [Nombre, SetNombre] = useState("");
  const [Descripcion, SetDescripcion] = useState("");
  const [Dificultad, SetDificultad] = useState("");
  const [FechaInicio, SetFechaInicio] = useState("");
  const [FechaTermino, SetFechaTermino] = useState("");
  const [Metodologia, SetMetodologia] = useState("");
  const [Cumplimiento, SetCumplimiento] = useState("");
  const [Area, SetArea] = useState("");

  const postData = ()=>{
    axios.post(`http://localhost:8000/metas`,
    {
      Nombre,
      Descripcion,
      Dificultad,
      FechaInicio,
      FechaTermino,
      Metodologia,
      Cumplimiento,
      Area
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
          <label>Nombre</label>
          <input type="text" placeholder='Nombre' value={Nombre} onChange={(e) => SetNombre(e.target.value)} />
        </div>
        <div>
          <label>Descripcion</label>
          <input type="text" placeholder='Descripcion' value={Descripcion} onChange={(e) => SetDescripcion(e.target.value)} />
        </div>
        <div>
          <label>Dificultad</label>
          <input type="text" placeholder='Dificultad' value={Dificultad} onChange={(e) => SetDificultad(e.target.value)} />
        </div>
        <div>
          <label>FechaInicio</label>
          <input type="date" placeholder='FechaInicio' value={FechaInicio} onChange={(e) => SetFechaInicio(e.target.value)} />
        </div>
        <div>
          <label>FechaTermino</label>
          <input type="date" placeholder='FechaTermino' value={FechaTermino} onChange={(e) => SetFechaTermino(e.target.value)} />
        </div>
        <div>
          <label>Metodologia</label>
          <input type="text" placeholder='Metodologia' value={Metodologia} onChange={(e) => SetMetodologia(e.target.value)} />
        </div>
        <div>
          <label>Cumplimiento</label>
          <input type="number" placeholder='Cumplimiento' value={Cumplimiento} onChange={(e) => SetCumplimiento(e.target.value)} />
        </div>
        <div>
          <label>Area</label>
          <input type="text" placeholder='Area' value={Area} onChange={(e) => SetArea(e.target.value)} />
        </div>
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
};

export default Formulario;
