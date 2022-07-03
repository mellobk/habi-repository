import { CheckCircle } from "phosphor-react";
import React from "react";
import { useDispatch } from "react-redux";
import { history } from "../../../../../shared/application/helpers/history";
import ButtonApp from "../../../../../shared/presentation/components/Button";
import { userInfoInit } from "../../../application/constans/formsHomeFields";
import { setUserInfo } from "../../../application/slices/home";
import { homeRoute } from "../../../infrastructure/routes";
import "./SuccessData.scss";

const SuccessData = () => {

    const dispatch = useDispatch();
  
    const handleClick = () =>{
        dispatch(setUserInfo({ ...userInfoInit }))
        window.localStorage.removeItem('userInfo');
        history.push(homeRoute)
    }

  return (
    <div className="success-container">
        <CheckCircle size={64} className="success"/>
        <h1> Informacion enviada correctamente</h1>
        <ButtonApp textButton='Volver' onClick={handleClick}/>
    </div>
  );
};

export default SuccessData;
