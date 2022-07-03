import React from "react";
import PropTypes from "prop-types";
import "./Modal.scss";
import Modal from "react-modal";

const ModalApp = ({
  variant,
  ClassName,
  children,
  modalIsOpen,
  onCLose,
  ...rest
}) => {
  Modal.setAppElement("#root");

  const customStyles = {
    overlay: {
      position: "fixed",
      zIndex: "4",
    },
    content: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      inset: '15px',
      padding: '10px'
    },
  };

  return (
    <Modal
      style={customStyles}
      isOpen={modalIsOpen}
      onRequestClose={onCLose}
      {...rest}
    >
      {children}
    </Modal>
  );
};

ModalApp.propTypes = {
  variant: PropTypes.string,
  ClassName: PropTypes.string,
  children: PropTypes.node,
  onCLose: PropTypes.func,
  modalIsOpen: PropTypes.bool,
};

ModalApp.defaultProps = {
  variant: "",
  ClassName: "",
  titleButton: "",
};

export default ModalApp;
