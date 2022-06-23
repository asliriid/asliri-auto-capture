import React, { useEffect } from "react";
import "@innovatrics/dot-face-auto-capture";

const FaceCamera = (props) => {
  useEffect(() => {
    // 2. Init existed custom web-component
    const faceAutoCaptureHTMLElement = document.getElementById(
      "x-dot-face-auto-capture"
    );

    if (faceAutoCaptureHTMLElement) {
      faceAutoCaptureHTMLElement.cameraOptions = props;
    }
  });

  // 1. Return empty custom web-component html TAG
  return <x-dot-face-auto-capture id="x-dot-face-auto-capture" />;
};

const FaceDetection = ({ onPhotoTaken, onError }) => {
  return (
    <FaceCamera
      imageType="png"
      cameraFacing="environment"
      photoTakenCb={onPhotoTaken}
      onError={onError}
    />
  );
};

export default FaceDetection;


