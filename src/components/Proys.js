import React, {useState, useEffect} from 'react'
import icon from '../proyector.png';
const Proys = () => {

  const [proys1, setProys1] = useState([])
  useEffect(() => {
    const getProys1 = () => {
      fetch('https://api.bluemoonsports.works/api/proys1')
        .then(res => res.json())
        .then(res => setProys1(res))
    }
    getProys1()
  }, [])

  const [proys2, setProys2] = useState([])
  useEffect(() => {
    const getProys2 = () => {
      fetch('https://api.bluemoonsports.works/api/proys2')
        .then(res => res.json())
        .then(res => setProys2(res))
    }
    getProys2()
  }, [])

  const [proys3, setProys3] = useState([])
  useEffect(() => {
    const getProys3 = () => {
      fetch('https://api.bluemoonsports.works/api/proys3')
        .then(res => res.json())
        .then(res => setProys3(res))
    }
    getProys3()
  }, [])
  return (
    <div className="Proys">
      <div>
        <h1>Zona 1</h1>
      </div>
      <div className="Zone1">
        {
          proys1.map((a) =>
            <div className="Lab">
              <img className="Img" src={icon} width="200px" height="200px"></img>
              <h1>{a.nombre}</h1>
              <div>
                <h4 className={a.disponible === 1 ? "Datos" : "DatosN"}>{
                  a.disponible === 1 ? "Disponible" : "No disponible"
                }</h4>
                <p>{a.marca}</p>
                <p>{a.modelo}</p>
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
          proys2.map((a) =>
            <div className="Lab">
              <img className="Img" src={icon} width="200px" height="200px"></img>
              <h1>{a.nombre}</h1>
              <div>
                <h4 className={a.disponible === 1 ? "Datos" : "DatosN"}>{
                  a.disponible === 1 ? "Disponible" : "No disponible"
                }</h4>
                <p>{a.marca}</p>
                <p>{a.modelo}</p>
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
          proys3.map((a) =>
            <div className="Lab">
              <img className="Img" src={icon} width="200px" height="200px"></img>
              <h1>{a.nombre}</h1>
              <div>
                <h4 className={a.disponible === 1 ? "Datos" : "DatosN"}>{
                  a.disponible === 1 ? "Disponible" : "No disponible"
                }</h4>
                <p>{a.marca}</p>
                <p>{a.modelo}</p>
              </div>
            </div>
          )
        }
      </div>


    </div>
  )
}
export default Proys