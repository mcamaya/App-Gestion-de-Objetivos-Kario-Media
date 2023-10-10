import React from "react";
import '../components/css/panel.css'

export default function Panel() {
  return (
    <div>
      <div>
        <div className="d-flex justify-content-center mt-3">
          <h1>Panel de Indicadores</h1>
        </div>
        <div className="d-flex justify-content-center">
          <p>
            Aqui puedes visualizar los indicadores propuestos y añadidos por tu
            equipo de trabajo. Si quieres ver más detalles , dale click a uno de
            ellos para más información
          </p>
        </div>
      </div>
      <div className="p-5">
        <table>
          <thead>
            <tr className="table">
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr className="m-5 tabla ">
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
