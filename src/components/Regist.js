import React from 'react'
const Regist = () => (
  <div className="Regist">
    <h3>Registrate</h3>
    <div className="Data">
      
      <input placeholder="Nombre de usuario"></input>
    </div>
    <div className="Data">
      
      <input placeholder="Nombre"></input>
    </div>
    <div className="Data">
      
      <input placeholder="Apellidos"></input>
    </div>
    <div className="Data">
      
      <select id="hh">
        <option value="Selecciona">Tipo de usuario</option>
        <option value="Alumno">Alumno</option>
        <option value="Profesor">Profesor</option>
      </select>
    </div>
    
    <div className="Data">
    <button className="But">Enviar</button>
    </div>
  </div>
  
)
export default Regist