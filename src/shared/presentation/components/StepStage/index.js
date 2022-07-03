import React from "react";
import "./StepStage.scss";
import PropTypes from "prop-types";


const StepStage = ({totalSteps, actualStep}) => {

  return (
    <div className='step-container'>
      
      {`${actualStep} de ${totalSteps}`}
 
    </div>
  );
};


StepStage.propTypes = {
  totalSteps: PropTypes.number,
  actualStep: PropTypes.number,

};
export default StepStage;
