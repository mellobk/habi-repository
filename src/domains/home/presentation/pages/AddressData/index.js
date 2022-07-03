import React from "react";
import { addressArrayInput } from "../../../application/constans/inputForms";
import { stepAddressValidationSchema } from "../../../application/schemas/formsHomeValidations";
import HomeForm from "../../components/HomeForm";
import "./AddressData.scss";

const AddressData = () => {
  return (
    <div className="">
      <HomeForm
        schema={stepAddressValidationSchema}
        inputArray={addressArrayInput}
      />
    </div>
  );
};

export default AddressData;
