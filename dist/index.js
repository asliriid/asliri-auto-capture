'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
require('@innovatrics/dot-face-auto-capture');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const FaceCamera = props => {
  React.useEffect(() => {
    // 2. Init existed custom web-component
    const faceAutoCaptureHTMLElement = document.getElementById("x-dot-face-auto-capture");

    if (faceAutoCaptureHTMLElement) {
      faceAutoCaptureHTMLElement.cameraOptions = props;
    }
  }); // 1. Return empty custom web-component html TAG

  return /*#__PURE__*/React__default["default"].createElement("x-dot-face-auto-capture", {
    id: "x-dot-face-auto-capture"
  });
};

const FaceDetection = ({
  onPhotoTaken,
  onError
}) => {
  return /*#__PURE__*/React__default["default"].createElement(FaceCamera, {
    imageType: "png",
    cameraFacing: "environment",
    photoTakenCb: onPhotoTaken,
    onError: onError
  });
};

const Button = ({
  label
}) => {
  return /*#__PURE__*/React__default["default"].createElement("button", null, label);
};

exports.Button = Button;
exports.FaceDetection = FaceDetection;
