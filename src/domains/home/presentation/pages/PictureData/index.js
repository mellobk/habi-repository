import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { history } from "../../../../../shared/application/helpers/history";
import ImageLoader from "../../../../../shared/presentation/components/ImageLoader"
import NoImageSelected from "../../../../../shared/presentation/components/ImageLoader/noImageSelected";
import stepsFields from "../../../application/constans/formsHomeFields";
import { getActualRotue, getUserInfo } from "../../../application/selectors/home";
import { setUserInfo } from "../../../application/slices/home";
import ButtonsForm from "../../components/ButtonsForm";
import "./PictureData.scss";

const PictureData = () => {
  const userInfo = useSelector(getUserInfo); 
  const [image, setImage] = useState(userInfo[stepsFields.PICTURE]);
  const [linkPush, setLinkPush] =  useState('')
  const routesPath = useSelector(getActualRotue); 
  const dispatch = useDispatch();

  const {
    handleSubmit,
  } = useForm({
    mode: "onChange",
  });

  const setImageToCrop = (data) => {
    setImage(data);
    dispatch(setUserInfo({ [stepsFields.PICTURE] : data}))

  };

  const onSubmit = () => {
    history.push(linkPush);
  };


  return (

    <div className="form-container">
    <form onSubmit={handleSubmit(onSubmit)} className="form">
    <div className={`project-logo-upload`}>
    <div className="logo">
      {image ? <img src={image} /> : <NoImageSelected />}
    </div>
    <div className="button">
      <ImageLoader
        setImage={setImageToCrop}
        fieldName={stepsFields.PICTURE}
        aspectRatio={1 / 1}
        image={image}
        minWidth={250}
        minHeight={250}
        textButton="Subir foto"
      />
    </div>

    <ButtonsForm setLinkPush={setLinkPush} routesPath={routesPath} />
  </div>
    </form>
  </div>
  );
};

export default PictureData;
