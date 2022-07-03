import * as yup from "yup";

import {
  EMPTY_FIELD,
  INVALID_EMAIL_FORMAT,
  MAX_NUMBER,
} from "../../../../shared/application/constants/messages/error-messages";
import stepsFields from "../constans/formsHomeFields";

// name and last name validation

export const stepValidation = {};
export const stepEmailValidation = {};
export const stepaddressValidation = {};
export const stepFloorNumberValidation = {};
export const stepZonesValidation = {};
export const parkingZonesValidation = {};
export const priceValidation = {};
export const ElevatorValidation = {};

stepValidation[stepsFields.NAME] = yup.string().required(EMPTY_FIELD);
stepValidation[stepsFields.LASTNAME] = yup.string().required(EMPTY_FIELD);

export const stepValidationSchema = yup.object().shape(stepValidation);

// email validation

stepEmailValidation[stepsFields.EMAIL] = yup
  .string()
  .email(INVALID_EMAIL_FORMAT)
  .required(EMPTY_FIELD);
export const stepEmailValidationSchema = yup
  .object()
  .shape(stepEmailValidation);

// adress validation

stepaddressValidation[stepsFields.ADDRESS] = yup.string().required(EMPTY_FIELD);
export const stepAddressValidationSchema = yup
  .object()
  .shape(stepaddressValidation);

// floor validation

stepFloorNumberValidation[stepsFields.FLOOR_NUMBER] = yup
  .number(EMPTY_FIELD)
  .typeError(EMPTY_FIELD)
  .required(EMPTY_FIELD)
  .min(1, MAX_NUMBER)
  .max(50, MAX_NUMBER);
export const stepFloorNumberValidationSchema = yup
  .object()
  .shape(stepFloorNumberValidation);

// zones validation

stepZonesValidation[stepsFields.BBQ_AREA] = yup.boolean();
stepZonesValidation[stepsFields.COMMUNITY_ROOM] = yup.boolean();
stepZonesValidation[stepsFields.PLAY_GROUND] = yup.boolean();
export const stepZonesValidationSchema = yup
  .object()
  .shape(stepZonesValidation);

  // parking validation

parkingZonesValidation[stepsFields.PARKING] = yup.string().required(EMPTY_FIELD);
parkingZonesValidation[stepsFields.COVERED] = yup.string();
export const parkingZonesValidationSchema = yup
  .object()
  .shape(parkingZonesValidation);


  
  // price validation

  priceValidation[stepsFields.PRICE] = yup.string().required(EMPTY_FIELD);
export const priceValidationValidationSchema = yup
  .object()
  .shape(priceValidation);

    // elevator validation

    ElevatorValidation[stepsFields.ELEVATOR] = yup.string().required(EMPTY_FIELD);
export const ElevatorValidationSchema = yup
  .object()
  .shape(ElevatorValidation);


