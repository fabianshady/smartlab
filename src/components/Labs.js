import React, { useState, useEffect } from "react";
import icon from '../icono.png';

function Labs(props) {
  console.log(props.labs1.map(obj => obj.used_by))

  return (
    <div className="Labs">
      <div>

      </div>
      <div className="Zone1">
        {
          props.labs1.map((a) =>
            <div className="Lab">
              <img className="Img" src={icon} width="200px" height="200px"></img>
              <h1>{a.name}</h1>
              {a.available === false ? <h3>Used by:</h3> : <h3></h3>}
              {a.available === false ? <h2>{a.used_by}</h2> : <h3></h3>}

              <div>
                <h4 className={a.available === true ? "Datos" : "DatosN"}>{
                  a.available === true ? "Disponible" : "No disponible"
                }</h4>
              </div>
            </div>
          )
        }
      </div>



    </div>
  )
}
export default Labs