import React, { useState } from "react";
import 'dot-face-auto-capture';
// import Logo from "../../../assets/logo-ASLI-RI-non-retina.png";

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

  // console.log(Logo);

  return (
    <>
      <div style={{position: "relative"}}>
        <FaceCamera
          imageType="png"
          cameraFacing="environment"
          photoTakenCb={onPhotoTaken}
          onError={onError}
        />
        <div style={{right: 0, bottom: 0, padding: 24, position: "absolute", display: "flex", justifyContent: "center", alignItems: "center"}}>
          <span style={{color: "#fff", marginRight: 10}}>Powered By</span><img src="https://www.asliri.id/wp-content/uploads/2019/10/logo-ASLI-RI-non-retina.png" height={50} />
        </div>
      </div>
    </>
  );
};

export default FaceDetection;


