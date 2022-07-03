import React, { useEffect, useState } from "react";
import { Cropper } from "react-cropper";
import PropTypes from "prop-types";
import { ArrowUDownRight, ArrowUUpLeft, MagnifyingGlassMinus, MagnifyingGlassPlus } from "phosphor-react";

import Modal from "react-modal";
import ActionButton from "../actionButton";
import "cropperjs/dist/cropper.css";
import "./ModalCropper.scss";
import { MIME_TYPE } from "../../../../application/helpers/cropper";




const customStyles = {
  content: {
    top: "auto",
    left: "auto",
    right: "auto",
    bottom: "auto",
    padding: 0,
    border: "none",
  },
  overlay: {
    zIndex: "10",
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

const ModalCropper = ({
  isOpenModal,
  setIsOpenModal,
  rawImage,
  minWidth,
  minHeight,
  aspectRatio,
  addImage,
  onClick
}) => {
  const [cropper, setCropper] = useState();



  Modal.setAppElement('#root')

  useEffect(() => {
    isOpenModal
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [isOpenModal]);

  const handleClickCrop = () => {
    const result = cropper
      .getCroppedCanvas({
        width: minWidth,
        height: minHeight,
        imageSmoothingQuality: "high",
      })
      .toDataURL(MIME_TYPE);
    addImage(result);
    onClick()
    setIsOpenModal(false);
  };

  const handleClickRotate = (e) => (left = true) => {
    e.preventDefault();
    cropper.rotate(left ? -45 : 45);
  };

  const handleClickZoom = (e) => (zoomIn = true) => {
    e.preventDefault();
    cropper.zoom(zoomIn ? 0.15 : -0.15);
  };

  const rotateLeft = (e) => handleClickRotate(e)();
  const rotateRight = (e) => handleClickRotate(e)(false);
  const zoomIn = (e) => handleClickZoom(e)();
  const zoomOut = (e) => handleClickZoom(e)(false);

  return (
    <Modal
      closeTimeoutMS={100}
      isOpen={isOpenModal}
      onRequestClose={() => setIsOpenModal(false)}
      style={customStyles}
    >
      <div className="logo-cropper">
        <div className="wrapper">
          <Cropper
            onInitialized={(instance) => setCropper(instance)}
            zoomTo={0.5}
            initialAspectRatio={1}
            src={rawImage}
            viewMode={0}
            minCropBoxHeight={minHeight}
            minCropBoxWidth={minWidth}
            aspectRatio={aspectRatio}
            background={false}
            responsive={true}
            autoCropArea={1}
            className="cropper"
            guides={true}
            dragMode={"move"}
          />
          <div className="cropper-actions">
            <ActionButton
              onClickAction={zoomIn}
              icon={<MagnifyingGlassPlus size={32} />}
     
            />
             
            <ActionButton
              onClickAction={zoomOut}
              icon={<MagnifyingGlassMinus size={32} />}

            />
            
            <ActionButton
              onClickAction={rotateLeft}
              icon={<ArrowUUpLeft size={32} />}
  
            />
            <ActionButton
               onClickAction={rotateRight}
              icon={<ArrowUDownRight size={32} />}

            />
            
            <ActionButton
   
             type="submit"
              onClickAction={handleClickCrop}
              text="Confirmar"
            />
            <ActionButton
      
              onClickAction={() => setIsOpenModal(false)}
              text="Cerrar"
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

ModalCropper.propTypes = {
  isOpenModal: PropTypes.bool,
  setIsOpenModal: PropTypes.func,
  rawImage: PropTypes.string,
  minWidth: PropTypes.number,
  minHeight: PropTypes.number,
  aspectRatio: PropTypes.node,
  addImage: PropTypes.func,
  onClick: PropTypes.func,
};

export default ModalCropper;
