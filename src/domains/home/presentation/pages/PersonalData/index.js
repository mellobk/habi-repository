import React from "react";
import { personalArrayInput } from "../../../application/constans/inputForms";
import { stepValidationSchema } from "../../../application/schemas/formsHomeValidations";
import HomeForm from "../../components/HomeForm";
import "./PersonalData.scss";

const PersonalData = () => {
  return (
    <div className="">
      <HomeForm schema={stepValidationSchema} inputArray={personalArrayInput} />
    </div>
  );
};

export default PersonalData;
