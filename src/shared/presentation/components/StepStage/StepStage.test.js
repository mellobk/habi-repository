import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import StepStage from "./index";


describe("<StepStage/>", () => {

  let component;
  const stageProps = {
    totalSteps: 8,
    actualStep: 1,

 
  };
  beforeEach(() => {
    component = render(
      <StepStage
      totalSteps={stageProps.totalSteps}
      actualStep={stageProps.actualStep}
      />
    );
  });

  test("renders component whith text", () => {
    component.getByText(`${stageProps.actualStep} de ${stageProps.totalSteps}`);
  });



});
