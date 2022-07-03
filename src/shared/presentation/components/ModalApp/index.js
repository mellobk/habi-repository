import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./Modal.scss";
import Modal from "react-modal";

const modalRoot = document.createElement("div");
modalRoot.setAttribute("id", "modal-root");
document.body.appendChild(modalRoot);

const ModalApp = ({ children, modalIsOpen, onCLose, ...rest }) => {
  const modalElement = document.createElement("div");
  useEffect(() => {
    modalRoot.appendChild(modalElement);
    Modal.setAppElement(modalElement);
    return () => modalRoot.removeChild(modalElement);
  });

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
      inset: "15px",
      padding: "10px",
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
  children: PropTypes.node,
  onCLose: PropTypes.func,
  modalIsOpen: PropTypes.bool,
};

export default ModalApp;
