import React from 'react';
import PropTypes from "prop-types";


import './noImageSelected.scss';

const NoImageSelected = ({title}) => {
	return (
		<div className="no_image_selected--container">
			<span>{title}</span>
		</div>
	);
};

NoImageSelected.propTypes = {
	title: PropTypes.string,
  };

  
export default NoImageSelected;