import React from "react";
import { history } from "../../../../../shared/application/helpers/history";
import ButtonApp from "../../../../../shared/presentation/components/Button";
import { personalDataRoute } from "../../../infrastructure/routes";
import "./Home.scss";

const HomePage = () => {
  const handleClick = () => {
    history.push(personalDataRoute)};

  return (
    <div className="home-main-container">
      <div className="text">
        <h1>¿PENSANDO EN VENDER?</h1>
        <p>Compramos</p>
        <p>tu vivienda en 10 días*</p>
      </div>
      <ButtonApp textButton="Vender"  onClick={handleClick}/>
    </div>
  );
};

export default HomePage;
