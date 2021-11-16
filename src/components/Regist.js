import React from 'react'
const Regist = () => (
  <div className="Regist">
    <h1>Registrate</h1>
    <div className="Data">
      
      <input className="Inputs" placeholder="Nombre de usuario"></input>
    </div>
    <div className="Data">
      
      <input className="Inputs" placeholder="Nombre"></input>
    </div>
    <div className="Data">
      
      <input className="Inputs" placeholder="Apellidos"></input>
    </div>
    <div className="Data">
      
      <select className="Inputs" id="hh">
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