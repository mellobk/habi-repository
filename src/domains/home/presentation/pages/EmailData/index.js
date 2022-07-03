import React from "react";
import { emailArrayInput } from "../../../application/constans/inputForms";
import { stepEmailValidationSchema } from "../../../application/schemas/formsHomeValidations";
import HomeForm from "../../components/HomeForm";
import "./EmailData.scss";

const EmailData = () => {
  return (
    <div className="">
      <HomeForm
        schema={stepEmailValidationSchema}
        inputArray={emailArrayInput}
      />
    </div>
  );
};

export default EmailData;
