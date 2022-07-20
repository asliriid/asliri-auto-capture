import React, { useState } from "react";
import 'dot-face-auto-capture';

const TOKEN = process.env.TOKEN_API;

const FaceCamera = (props) => {
  // React.useEffect(() => {
  // 2. Init existed custom web-component
  const faceAutoCaptureHTMLElement = document.getElementById(
    "x-dot-face-auto-capture"
  );

  if (faceAutoCaptureHTMLElement) {
    faceAutoCaptureHTMLElement.cameraOptions = props;
  }
  // }, []);

  // 1. Return empty custom web-component html TAG
  return <x-dot-face-auto-capture id="x-dot-face-auto-capture" />;
};

const FaceDetection = ({ onPhotoTaken, onError, token }) => {
  // const [valid, setIsValid] = useState(true);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);
  //     try {
  //       const { data: response } = await axios.get(`${TOKEN}?token=${token}`);
  //       setIsValid(response);
  //     } catch (error) {
  //       console.error(error.message);
  //     }
  //     setLoading(false);
  //   }

  //   fetchData();
  // }, []);

  return (
    <>
      <FaceCamera
        imageType="png"
        cameraFacing="environment"
        photoTakenCb={onPhotoTaken}
        onError={onError}
      />
    </>
  );
};

export default FaceDetection;


