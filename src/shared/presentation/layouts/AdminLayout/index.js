/* eslint-disable import/no-cycle */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./AdminLayout.scss";
import { useDispatch, useSelector } from "react-redux";
import StepStage from "../../components/StepStage";
import { MainContainer } from "./StyledComponents";
import { getTotalStep } from "../../../../domains/home/application/selectors/home";
import { setSActualStep } from "../../../../domains/home/application/slices/home";
import ResumeView from "../../../../domains/home/presentation/components/ResumeView";
import ButtonApp from "../../components/Button";
import ModalApp from "../../components/ModalApp";

const AdminLayout = ({ children, image, information, step }) => {
  const totalSteps = useSelector(getTotalStep);

  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    step && dispatch(setSActualStep(step));
  }, [dispatch, step]);

  const handleOnClose = () => {
    setModalOpen(false);
  };
  return (
    <MainContainer backgroundImage={image} className="admin-layout-container">
      <div className="container">
        {children}
        {step && <StepStage actualStep={step} totalSteps={totalSteps} />}
      </div>
      {information && (

        <>
            <div className="resume">
          <ResumeView />
        </div>
          
        <div className="resume-modal">
          <ButtonApp
            textButton="Ver resumen"
            className="resumen-view-button"
            onClick={() => {
              setModalOpen(true);
            }}
          />
          <ModalApp modalIsOpen={modalOpen} onCLose={handleOnClose}>
            <ResumeView />
            <ButtonApp textButton="Cerrar" onClick={handleOnClose} />
          </ModalApp>
        </div>
        </>
    
      )}

   
    </MainContainer>
  );
};

AdminLayout.propTypes = {
  children: PropTypes.node,
  image: PropTypes.string,
  information: PropTypes.bool,
  step: PropTypes.number,
};

export default AdminLayout;
