import React from "react";
import { useHistory } from "react-router-dom";
import ButtonApp from "../../../../../shared/presentation/components/Button";
import { ThankYouRoute } from "../../../infrastructure/routes";
import ResumeView from "../../components/ResumeView";

import "./ResumeData.scss";

const ResumeData = () => {
  const resumeHistory =  useHistory();
  const handleClick = () =>{
    resumeHistory.push(ThankYouRoute)
}
const handleClickBack = () =>{
  resumeHistory.goBack()
}

  return (
    <div className="resume-view-container">
      <ResumeView/>
      <ButtonApp textButton='Volver' onClick={handleClickBack}/>
      <ButtonApp textButton='Enviar' onClick={handleClick}/>
     
    </div>
  );
};

export default ResumeData;
