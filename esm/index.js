import React from 'react';
import 'dot-face-auto-capture';

process.env.TOKEN_API;

var FaceCamera = function FaceCamera(props) {
  // React.useEffect(() => {
  // 2. Init existed custom web-component
  var faceAutoCaptureHTMLElement = document.getElementById("x-dot-face-auto-capture");

  if (faceAutoCaptureHTMLElement) {
    faceAutoCaptureHTMLElement.cameraOptions = props;
  } // }, []);
  // 1. Return empty custom web-component html TAG


  return /*#__PURE__*/React.createElement("x-dot-face-auto-capture", {
    id: "x-dot-face-auto-capture"
  });
};

var FaceDetection = function FaceDetection(_ref) {
  var onPhotoTaken = _ref.onPhotoTaken,
      onError = _ref.onError;
      _ref.token;
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
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FaceCamera, {
    imageType: "png",
    cameraFacing: "environment",
    photoTakenCb: onPhotoTaken,
    onError: onError
  }));
};

var ButtonAsliri = function ButtonAsliri(_ref) {
  var label = _ref.label;
  return /*#__PURE__*/React.createElement("button", null, label);
};

export { ButtonAsliri, FaceDetection };
//# sourceMappingURL=index.js.map
