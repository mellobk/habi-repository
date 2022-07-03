import React from "react";
import { zoneArrayInput } from "../../../application/constans/inputForms";
import { stepZonesValidationSchema } from "../../../application/schemas/formsHomeValidations";
import HomeForm from "../../components/HomeForm";
import "./ZonesData.scss";

const ZonesData = () => {
  return (
    <div className="">
      <HomeForm
        schema={stepZonesValidationSchema}
        inputArray={zoneArrayInput}
      />
    </div>
  );
};


export default ZonesData;
