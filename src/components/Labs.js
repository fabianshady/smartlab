import React, {useState, useEffect } from "react";
import icon from '../icono.png';
const Labs = () => {
  const [labs1, setLabs1] = useState([])
  useEffect(() => {
    const getLabs1 = () => {
      fetch('https://api.bluemoonsports.works/api/labs1')
        .then(res => res.json())
        .then(res => setLabs1(res))
    }
    getLabs1()
  }, [])

  const [labs2, setLabs2] = useState([])
  useEffect(() => {
    const getLabs2 = () => {
      fetch('https://api.bluemoonsports.works/api/labs2')
        .then(res => res.json())
        .then(res => setLabs2(res))
    }
    getLabs2()
  }, [])

  const [labs3, setLabs3] = useState([])
  useEffect(() => {
    const getLabs3 = () => {
      fetch('https://api.bluemoonsports.works/api/labs3')
        .then(res => res.json())
        .then(res => setLabs3(res))
    }
    getLabs3()
  }, [])
  return (
    <div className="Labs">
      <div>
        <h1>Zona 1</h1>
      </div>
      <div className="Zone1">
        {
          labs1.map((a) =>
            <div className="Lab">
              <img className="Img" src={icon} width="200px" height="200px"></img>
              <h1>{a.nombre}</h1>
              <div>
                <h4 className={a.disponible === 1 ? "Datos" : "DatosN"}>{
                  a.disponible === 1 ? "Disponible" : "No disponible"
                }</h4>
              </div>
            </div>
          )
        }
      </div>

      <div>
        <h1>Zona 2</h1>
      </div>
      <div className="Zone2">
        {
          labs2.map((a) =>
            <div className="Lab">
              <img className="Img" src={icon} width="200px" height="200px"></img>
              <h1>{a.nombre}</h1>
              <div>
                <h4 className={a.disponible === 1 ? "Datos" : "DatosN"}>{
                  a.disponible === 1 ? "Disponible" : "No disponible"
                }</h4>
              </div>
            </div>
          )
        }
      </div>
      <div>
        <h1>Zona 3</h1>
      </div>
      <div className="Zone3">
        {
          labs3.map((a) =>
            <div className="Lab">
              <img className="Img" src={icon} width="200px" height="200px"></img>
              <h1>{a.nombre}</h1>
              <div>
                <h4 className={a.disponible === 1 ? "Datos" : "DatosN"}>{
                  a.disponible === 1 ? "Disponible" : "No disponible"
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