import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import "./ElevatorFrom.scss";
import { setUserInfo } from "../../../application/slices/home";
import { history } from "../../../../../shared/application/helpers/history";
import {
  getActualRotue,
  getUserInfo,
} from "../../../application/selectors/home";
import Select from "../../../../../shared/presentation/components/Select";
import stepsFields from "../../../application/constans/formsHomeFields";
import { ElevatorValidationSchema } from "../../../application/schemas/formsHomeValidations";
import { selectOptions } from "../../../application/constans/inputForms";
import ButtonsForm from "../ButtonsForm";

const ParkingForm = () => {
  const [linkPush, setLinkPush] = useState("");
  const routesPath = useSelector(getActualRotue);
  const userInfo = useSelector(getUserInfo);
  const stepVariable=stepsFields.ELEVATOR;

  const findDefaultOption = (option) => {
    const findValue = selectOptions.find((data) => data.value === option);
    return findValue;
  };

  const {
    setValue,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(ElevatorValidationSchema),
    mode: "onChange",
  });

  useEffect(() => {
    userInfo[stepVariable] &&
      setValue(
        stepVariable,
        findDefaultOption(userInfo[stepVariable]).value
      );
  }, []);

  const dispatch = useDispatch();

  
  const handleOnchange = (name,data) => {
    dispatch(setUserInfo({ [name]:data }))
    setValue(name,data)
}

  const onSubmit = () => {
       history.push(linkPush)};
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <Select
          title="Tiene elevador?"
          name={stepVariable}
          options={selectOptions}
          defaultOption={findDefaultOption(userInfo[stepVariable])}
          defaultMessage="Seleccione una opcion"
          onSelectItem={(e) => handleOnchange(stepVariable, e.value)}
          error={errors[stepVariable]?.message}
        />

        <ButtonsForm setLinkPush={setLinkPush} routesPath={routesPath} />
      </form>
    </div>
  );
};

export default ParkingForm;
