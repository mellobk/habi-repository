import React from "react";
import { zoneArrayInput } from "../../../application/constans/inputForms";
import { stepZonesValidationSchema } from "../../../application/schemas/formsHomeValidations";
import ZonesForm from "../../components/ZonesForm";
import "./ZonesData.scss";

const ZonesData = () => {
  return (
    <div className="">
      <ZonesForm
        schema={stepZonesValidationSchema}
        inputArray={zoneArrayInput}
      />
    </div>
  );
};

export default ZonesData;
