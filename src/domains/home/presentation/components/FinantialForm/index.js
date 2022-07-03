import React, {  useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import "./FinantialForm.scss";
import { setUserInfo } from "../../../application/slices/home";
import { history } from "../../../../../shared/application/helpers/history";
import {
  getActualRotue,
  getUserInfo,
} from "../../../application/selectors/home";
import stepsFields from "../../../application/constans/formsHomeFields";
import { priceValidationValidationSchema } from "../../../application/schemas/formsHomeValidations";
import ButtonsForm from "../ButtonsForm";
import InputApp from "../../../../../shared/presentation/components/Input";
import { currencyCopFormat } from "../../../../../shared/application/helpers/common-functions";

const ParkingForm = () => {
  const [linkPush, setLinkPush] = useState("");
  const routesPath = useSelector(getActualRotue);
  const userInfo = useSelector(getUserInfo);
  const stepVariable=stepsFields.PRICE;

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(priceValidationValidationSchema),
    mode: "onChange",
  });


  const dispatch = useDispatch();

  const handleOnchange = (name,data) => {
    dispatch(setUserInfo({ [name]:data }))
}

  const onSubmit = () => {
       history.push(linkPush)};

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)} className="form">
      <InputApp
             
                title='Precio del inmueble'
                type='text'
                name={stepVariable}
                value={userInfo[stepVariable]}
                placeholder='Ingresa el precio del inmueble'
                register={register(stepVariable)}
                error={errors[stepVariable]?.message}
                onChange={(e) => handleOnchange(stepVariable, currencyCopFormat(e.target.value))}
              />

        <ButtonsForm setLinkPush={setLinkPush} routesPath={routesPath} />
      </form>
    </div>
  );
};

export default ParkingForm;
