import React from "react";
import "./css/logout.css";

export default function LogoutBox({ onLogout }) {
  return (
    <div className="logout-box">
      <button className="logout-button" onClick={onLogout}>
        <i class="bi bi-box-arrow-left"></i> Cerrar Sesión
      </button>
    </div>
  );
}
