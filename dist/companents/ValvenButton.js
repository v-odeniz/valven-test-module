"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const buttonStyle = {
  margin: '10px 0'
};

const Button = _ref => {
  let {
    label,
    handleClick
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("button", {
    className: "btn btn-default",
    style: buttonStyle,
    onClick: handleClick
  }, label);
};

var _default = Button;
exports.default = _default;