"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function Modal(props) {
  /**
   * ! Props needed :
   * 
   * * content : display modal text {string}
   * * isModal : change className so you can on/off with display: flex / display: none {boolean}
   * * closeModal : function used in parent to change isModal {object}
   * 
   */

  // Change className for display modal
  var showHideClassName = props.isModalOn ? "modal display-flex" : "modal display-none";

  // Change className for display container modal
  var showHideContainerClassName = props.isModalOn ? "display-block" : "display-none";
  return /*#__PURE__*/_react.default.createElement("div", {
    className: showHideContainerClassName
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: showHideClassName
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "modal_text"
  }, props.content), /*#__PURE__*/_react.default.createElement("p", {
    className: "button_close_container"
  }, /*#__PURE__*/_react.default.createElement("i", {
    onClick: props.closeModal,
    className: "close_modal fa fa-2x fa-times-circle-o",
    "aria-hidden": "true"
  }))));
}
var _default = Modal;
exports.default = _default;