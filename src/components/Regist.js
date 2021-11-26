import React, { useState, useEffect } from "react";

const Regist = () => {
  const [usuario, setUsuario] = useState({

  })

  const hChange = e => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })
  }

  const hSubmit = () => {
    if (usuario.nombre_usuario === '' || usuario.tipo_de_usuario === '') {
      alert('Llena todos los campos')
      return
    }

    const requestInit = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(usuario)
    }
    fetch('http://localhost:9000/api/users', requestInit)
      .then(res => res.json())
      .then(res => console.log(res))

    setUsuario({
      nombres: '',
      apellidos: '',
      tipo_de_usuario: '',
      nombre_usuario: ''
    })
  }
  return (
    <div className="Regist">
      <h1>Registrate</h1>
      <form onSubmit={hSubmit}>
        <div className="Data">

          <input onChange={hChange} name="nombre_usuario" id="nuser" className="Inputs" placeholder="Nombre de usuario"></input>
        </div>
        <div className="Data">

          <input onChange={hChange} name="nombres" id="name" className="Inputs" placeholder="Nombre"></input>
        </div>
        <div className="Data">

          <input onChange={hChange} name="apellidos" id="lastname" className="Inputs" placeholder="Apellidos"></input>
        </div>
        <div className="Data">

          <select onChange={hChange} name="tipo_de_usuario" id="type" className="Inputs" id="hh">
            <option value="Selecciona">Tipo de usuario</option>
            <option value="Alumno">Alumno</option>
            <option value="Profesor">Profesor</option>
          </select>
        </div>

        <div className="Data">
          <button type="submit" className="But">Enviar</button>
        </div>
      </form>
    </div>

  )
}
export default Regist