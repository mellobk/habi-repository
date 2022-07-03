import React from "react";
import { floorNumberArrayInput } from "../../../application/constans/inputForms";
import { stepFloorNumberValidationSchema } from "../../../application/schemas/formsHomeValidations";
import HomeForm from "../../components/HomeForm";
import "./FloorNumberData.scss";

const FloorNumberData = () => {
  return (
    <div className="">
      <HomeForm
        schema={stepFloorNumberValidationSchema}
        inputArray={floorNumberArrayInput}
      />
    </div>
  );
};

export default FloorNumberData;
