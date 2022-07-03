import React from "react";
import PropTypes from "prop-types";
import ButtonApp from "../../../../../shared/presentation/components/Button";
import './ButtonsForm.scss'
import { resumeRoute } from "../../../infrastructure/routes";

const ButtonsForm = ({ setLinkPush, routesPath }) => {

  return (
    <div className="button-container">
          <ButtonApp
            textButton={routesPath?.lastRoute ? "Anterior" : "Volver"}
            className="button small"
            onClick={() => setLinkPush(routesPath.lastRoute? routesPath.lastRoute : '/')}
            type="submit"
          />

          <ButtonApp
            textButton={routesPath?.nextRoute ? "Siguiente" : "Ver resumen"}
            className="button small"
            onClick={() => setLinkPush(routesPath.nextRoute? routesPath.nextRoute : resumeRoute)}
            type="submit"
          />
        </div>
  );
};

ButtonsForm.propTypes = {
    setLinkPush: PropTypes.func,
    routesPath: PropTypes.object,
};


export default ButtonsForm;
