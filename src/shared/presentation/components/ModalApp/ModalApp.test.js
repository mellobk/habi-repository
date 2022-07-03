import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render  } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ModalAPP from "./index";




test("no render when modal is close", () => {
  const component = render(
    <ModalAPP
    modalIsOpen={false}
    onCLose={()=>{ return false}}
    >
     <div className="test-modal">Text test</div>
    </ModalAPP>
  );

  const selecDiv = component.container.querySelector(".test-modal");
  expect(selecDiv).toBeFalsy()
});

test("render text when modal its open", () => {
    const component = render(
      <ModalAPP
      modalIsOpen={true}
      onCLose={()=>{ return false}}
      >
       <div className="test-modal">Text test</div>
      </ModalAPP>
    );
    expect(component.getByText('Text test')).toBeTruthy()
  });


  test("expect close modal when click out this", () => {
    const component = render(
      <ModalAPP
      modalIsOpen={true}
      onCLose={()=>{ return false}}
      >
       <div className="test-modal">Text test</div>
      </ModalAPP>
    );
    component.getByText('Text test');
    const body =  document.querySelector('body')
    userEvent.click(body);
    const selecDiv = component.container.querySelector(".test-modal");
    expect(selecDiv).toBeFalsy()
  
  });

