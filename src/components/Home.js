import React from "react";
import back from '../back.png';
import '../App.css';

const Home = () => (
    <div className="Home">
        <div className="Welc">
        <h2>¡Bienvenidos a SMARTLAB!</h2>
        <p>SMARTLAB es una aplicación para la administración de los laboratorios de cómputo y control del inventario de recursos audiovisuales para profesores, mediante la coordinación de las computadoras que administran los laboratorios.</p>
        </div>
        <div className="Back"><img src={back} width="100%"/></div>
    </div>
    
)

export default Home;