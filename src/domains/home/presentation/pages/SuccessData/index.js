import { CheckCircle } from "phosphor-react";
import React from "react";
import { history } from "../../../../../shared/application/helpers/history";
import ButtonApp from "../../../../../shared/presentation/components/Button";

import { homeRoute } from "../../../infrastructure/routes";
import "./SuccessData.scss";

const SuccessData = () => {
  const handleClick = () => {
    history.push(homeRoute);
  };

  return (
    <div className="success-container">
      <CheckCircle size={64} className="success" />
      <h1> Informacion enviada correctamente</h1>
      <ButtonApp textButton="Volver" onClick={handleClick} />
    </div>
  );
};

export default SuccessData;
