import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import ButtonApp from "../../../../../shared/presentation/components/Button";
import { userInfoInit } from "../../../application/constans/formsHomeFields";
import { setUserInfo } from "../../../application/slices/home";
import { ThankYouRoute } from "../../../infrastructure/routes";
import ResumeView from "../../components/ResumeView";

import "./ResumeData.scss";

const ResumeData = () => {
  const dispatch = useDispatch();
  const resumeHistory =  useHistory();
  const handleClick = () =>{
    dispatch(setUserInfo({ ...userInfoInit }))
    window.localStorage.removeItem('userInfo');
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
