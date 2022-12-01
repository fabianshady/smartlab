import React, { useState, useEffect } from 'react'
import icon from '../proyector.png';
function Proys(props) {
  return (
    <div className="Proys">
      <div>

      </div>
      <div className="Zone1">
        {
          props.proys1.map((a) =>
            <div className="Lab">
              <img className="Img" src={icon} width="200px" height="200px"></img>
              <h1>{a.nombre}</h1>
              {a.available === false ? <h3>Used by:</h3> : <h3></h3>}
              {a.available === false ? <h2>{a.used_by}</h2> : <h3></h3>}
              <div>
                <h4 className={a.available === true ? "Datos" : "DatosN"}>{
                  a.available === true ? "Disponible" : "No disponible"
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