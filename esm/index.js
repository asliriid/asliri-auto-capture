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
  // console.log(Logo);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(FaceCamera, {
    imageType: "png",
    cameraFacing: "environment",
    photoTakenCb: onPhotoTaken,
    onError: onError
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      right: 0,
      bottom: 0,
      padding: 24,
      position: "absolute",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#fff",
      marginRight: 10
    }
  }, "Powered By"), /*#__PURE__*/React.createElement("img", {
    src: "https://www.asliri.id/wp-content/uploads/2019/10/logo-ASLI-RI-non-retina.png",
    height: 50
  }))));
};

var ButtonAsliri = function ButtonAsliri(_ref) {
  var label = _ref.label;
  return /*#__PURE__*/React.createElement("button", null, label);
};

export { ButtonAsliri, FaceDetection };
//# sourceMappingURL=index.js.map
