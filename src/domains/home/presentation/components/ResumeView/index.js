import React from "react";
import { useSelector } from "react-redux";
import stepsFields from "../../../application/constans/formsHomeFields";
import { getUserInfo } from "../../../application/selectors/home";

import "./ResumeView.scss";

const ResumeView = () => {

    const userInfo = useSelector(getUserInfo); 

  return (
    <div className="resume-view-container">
    <h1>Resume View</h1>
    <img  className="img" src={userInfo[stepsFields.PICTURE]}/>
    <div className="personal-data"><strong>Nombre:</strong> {`${userInfo[stepsFields.NAME]} ${userInfo[stepsFields.LASTNAME]}`}</div> 
    <div className="email"><strong>Correo electronico:</strong> {`${userInfo[stepsFields.EMAIL]}`}</div> 
    <div className="address"><strong>Dirección:</strong> {`${userInfo[stepsFields.ADDRESS]}`}</div> 
    <div className="floor-number"><strong>Numero de piso del apartmento?:</strong> {`${userInfo[stepsFields.FLOOR_NUMBER]}`}</div>
    <div className="bbq-zone"><strong>Tiene zona BBQ?:</strong> {`${userInfo[stepsFields.BBQ_AREA]?'Si':'No'}`}</div>
    <div className="community-room-zone"><strong>Tiene salón comunal?:</strong> {`${userInfo[stepsFields.COMMUNITY_ROOM]?'Si':'No'}`}</div>
    <div className="play-groun-zone"><strong>Parque de juegos?:</strong> {`${userInfo[stepsFields.PLAY_GROUND]?'Si':'No'}`}</div>
    <div className="parking"><strong>Tiene Parquedero?:</strong> {`${userInfo[stepsFields.PARKING]}`}</div>
    {userInfo[stepsFields.PARKING] ==='Si' && <div className="covered"><strong>El Parquedero es cubierto?:</strong> {`${userInfo[stepsFields.COVERED]}`}</div>}
    <div className="price"><strong>Precio del inmueble:</strong> {`${userInfo[stepsFields.PRICE]}`}</div>
    <div className="elevator"><strong>Tiene elevador?:</strong> {`${userInfo[stepsFields.ELEVATOR]}`}</div>
    </div>
  );
};

export default ResumeView;
