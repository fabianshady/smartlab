import React from 'react';
import icon from '../icono.png';
const Labs = () => (
  <div className="Labs">
    <div>
      <h1>Zona 1</h1>
    </div>
    <div className="Zone1">
      <div className="Lab">
        <img className="Img" src={icon} width="200px" height="200px"></img>
        <h1>Laboratorio A</h1>
        <div>
          <h4 className="Datos">Disponible</h4>
        </div>
      </div>
      <div className="Lab">
        <img className="Img" src={icon} width="200px" height="200px"></img>
        <h1>Laboratorio B</h1>
        <div>
          <h4 className="Datos">Disponible</h4>
        </div>
      </div>
      <div className="Lab">
        <img className="Img" src={icon} width="200px" height="200px"></img>
        <h1>Laboratorio C</h1>
        <div>
          <h4 className="DatosN">No disponible</h4>
        </div>
      </div>
      <div className="Lab">
        <img className="Img" src={icon} width="200px" height="200px"></img>
        <h1>Laboratorio D</h1>
        <div>
          <h4 className="DatosN">No disponible</h4>
        </div>
      </div>
    </div>

    <div>
      <h1>Zona 2</h1>
    </div>
    <div className="Zone2">
      <div className="Lab">
        <img className="Img" src={icon} width="200px" height="200px"></img>
        <h1>Laboratorio A</h1>
      </div>
      <div className="Lab">
        <img className="Img" src={icon} width="200px" height="200px"></img>
        <h1>Laboratorio B</h1>
      </div>
      <div className="Lab">
        <img className="Img" src={icon} width="200px" height="200px"></img>
        <h1>Laboratorio C</h1>
      </div>
      <div className="Lab">
        <img className="Img" src={icon} width="200px" height="200px"></img>
        <h1>Laboratorio D</h1>
      </div>
    </div>
    <div>
      <h1>Zona 3</h1>
    </div>
    <div className="Zone3">
      <div className="Lab">
        <img className="Img" src={icon} width="200px" height="200px"></img>
        <h1>Laboratorio A</h1>
      </div>
      <div className="Lab">
        <img className="Img" src={icon} width="200px" height="200px"></img>
        <h1>Laboratorio B</h1>
      </div>
      <div className="Lab">
        <img className="Img" src={icon} width="200px" height="200px"></img>
        <h1>Laboratorio C</h1>
      </div>
      <div className="Lab">
        <img className="Img" src={icon} width="200px" height="200px"></img>
        <h1>Laboratorio D</h1>
      </div>
    </div>

  </div>
)

export default Labs