import React, { useState, useEffect } from "react";
import { Lab, Proj } from "./model";

function Regist(props) {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const hSubmitL = () => {
    const lab1 = new Lab(getRandomInt(100), document.getElementById('typeLab').value, false, document.getElementById('nuser').value)
    props.labs1.forEach((element, index) => {
      if (element.name === lab1.name) {
        props.labs1[index] = lab1;
        props.setLabs1(props.labs1);

      }
    })
    alert('Genial, has registrado un laboratorio')
    document.getElementById('nuser').value = '';
  }

  const hSubmitP = () => {

    props.proys1.forEach((element, index) => {
      if (element.model === document.getElementById('typeProj').value) {
        console.log(props.proys1[index].brand)
        props.setRet(props.proys1[index].brand)
      }
    })


    const proy1 = new Proj(getRandomInt(100),

      props.ret
      ,
      document.getElementById('typeProj').value,
      false,
      document.getElementById('nuser2').value)

    props.proys1.forEach((element, index) => {
      if (element.model === proy1.model) {
        console.log(props.ret)
        props.proys1[index] = proy1;
        console.log(proy1)
        props.setProys1(props.proys1);
      }
    })
    alert('Genial, has registrado un proyector')
    document.getElementById('nuser2').value = '';
  }
  return (
    <div className="Home">
      <div className="Welc">
        <h2>Laboratorios</h2>

        <div className="Data">

          <input name="nombre_usuario" id="nuser" className="Inputs" placeholder="Nombre de usuario"></input>
        </div>

        <div className="Data">

          <select name="labo" id="typeLab" className="Inputs">
            {
              props.labs1.map((a) => a.available === true ? <option value={a.name}>{a.name}</option> : <option value={a.name} disabled>{a.name}</option>)

            }
          </select>
        </div>

        <div className="Data">
          <button onClick={hSubmitL} className="But">Enviar</button>
        </div>

      </div>
      <div className="Welc">
        <h2>Proyectores</h2>

        <div className="Data">

          <input name="nombre_usuario" id="nuser2" className="Inputs" placeholder="Nombre de usuario"></input>
        </div>

        <div className="Data">

          <select name="proje" id="typeProj" className="Inputs">
            {
              props.proys1.map((a) => a.available === true ? <option value={a.model}>{a.brand} {a.model}</option> : <option value={a.name} disabled>{a.name}</option>)

            }
          </select>
        </div>

        <div className="Data">
          <button onClick={hSubmitP} className="But">Enviar</button>
        </div>

      </div>
    </div>



  )
}
export default Regist
