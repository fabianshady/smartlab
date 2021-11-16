import React from 'react'
import icon from '../proyector.png';

const Proys = () => (
  <div className="Proys">
    <div>
      <h1>Proyectores</h1>
    </div>
    <div className="Proyectores">
      <div className="Proy">
        <img className="Img" src={icon} width="200px" height="200px"></img>
        <h1>Proyector -1-</h1>
        <div>
          <h4 className="Datos">Disponible</h4>
        </div>
      </div>
      <div className="Proy">
        <img className="Img" src={icon} width="200px" height="200px"></img>
        <h1>Proyector -2-</h1>
        <div>
          <h4 className="DatosN">No disponible</h4>
        </div>
      </div>
      <div className="Proy">
        <img className="Img" src={icon} width="200px" height="200px"></img>
        <h1>Proyector -3-</h1>
        <div>
        <h4 className="Datos">Disponible</h4>
        </div>
      </div>
      <div className="Proy">
        <img className="Img" src={icon} width="200px" height="200px"></img>
        <h1>Proyector -4-</h1>
        <div>
          <h4 className="DatosN">No disponible</h4>
        </div>
      </div>
    </div>
    
  </div>
)

export default Proys