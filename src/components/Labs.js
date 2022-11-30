import React, { useState, useEffect } from "react";
import icon from '../icono.png';
import { ref, child, get } from "firebase/database";
import { db } from "../firebase";
import data_labs from './labs.json';

const Labs = () => {
  const [labs1, setLabs1] = useState([])
  useEffect(() => {
    const getLabs1 = () => {
      get(child(db, `laboratory/`)).then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
          setLabs1(snapshot.val())
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      });
    }
    getLabs1();
  }, [])

  
  return (
    <div className="Labs">
      <div>
        <h1>Zona 1</h1>
      </div>
      <div className="Zone1">
        {
          data_labs.map((a) =>
            <div className="Lab">
              <img className="Img" src={icon} width="200px" height="200px"></img>
              <h1>{a.name}</h1>
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