import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import "./ParkingForm.scss";
import { setUserInfo } from "../../../application/slices/home";
import { history } from "../../../../../shared/application/helpers/history";
import {
  getActualRotue,
  getUserInfo,
} from "../../../application/selectors/home";
import Select from "../../../../../shared/presentation/components/Select";
import stepsFields from "../../../application/constans/formsHomeFields";
import { parkingZonesValidationSchema } from "../../../application/schemas/formsHomeValidations";
import { selectOptions } from "../../../application/constans/inputForms";
import ButtonsForm from "../ButtonsForm";

const ParkingForm = () => {
  const [linkPush, setLinkPush] = useState("");
  const routesPath = useSelector(getActualRotue);
  const userInfo = useSelector(getUserInfo);
  const stepParkinVariable = stepsFields.PARKING;
  const stepCoveredVariable = stepsFields.COVERED;

  const findDefaultOption = (option) => {
    const findValue = selectOptions.find((data) => data.value === option);
    return findValue;
  };

  const {
    setValue,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({
    resolver: yupResolver(parkingZonesValidationSchema),
    mode: "onChange",
  });

  useEffect(() => {
    userInfo[stepParkinVariable] &&
      setValue(
        stepParkinVariable,
        findDefaultOption(userInfo[stepParkinVariable]).value
      );
      setValue(
        stepCoveredVariable,
        findDefaultOption(userInfo[stepCoveredVariable]).value
      );
  }, []);

  const dispatch = useDispatch();

  const handleOnchange = (name, data) => {
    dispatch(setUserInfo({ [name]: data }));
    setValue(name, data);
  };

  const onSubmit = () => {
    history.push(linkPush);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <Select
          title="Su inmueble tiene parqueadero?"
          name={stepParkinVariable}
          options={selectOptions}
          defaultOption={findDefaultOption(userInfo[stepParkinVariable])}
          defaultMessage="Seleccione una opcion"
          onSelectItem={(e) => handleOnchange(stepParkinVariable, e.value)}
          error={errors[stepParkinVariable]?.message}
        />

        {watch()[stepParkinVariable] === "Si" && (
          <Select
            title="Es cubierto?"
            name={stepCoveredVariable}
            options={selectOptions}
            defaultOption={findDefaultOption(userInfo[stepCoveredVariable])}
            defaultMessage="Seleccione una opcion"
            onSelectItem={(e) => handleOnchange(stepCoveredVariable, e.value)}
            error={errors[stepCoveredVariable]?.message}
          />
        )}

        <ButtonsForm setLinkPush={setLinkPush} routesPath={routesPath} />
      </form>
    </div>
  );
};

export default ParkingForm;
