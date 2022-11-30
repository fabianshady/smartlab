import React, {useState, useEffect} from 'react'
import icon from '../proyector.png';
import data_projs from './projs.json';
const Proys = () => {

  
  return (
    <div className="Proys">
      <div>
        <h1>Zona 1</h1>
      </div>
      <div className="Zone1">
        {
          data_projs.map((a) =>
            <div className="Lab">
              <img className="Img" src={icon} width="200px" height="200px"></img>
              <h1>{a.nombre}</h1>
              <div>
                <h4 className={a.disponible === 1 ? "Datos" : "DatosN"}>{
                  a.disponible === 1 ? "Disponible" : "No disponible"
                }</h4>
                <p>{a.brand}</p>
                <p>{a.model}</p>
              </div>
            </div>
          )
        }
      </div>

    </div>
  )
}
export default Proys