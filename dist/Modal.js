"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function Modal(props) {
  // Change display modal
  var showHideClassName = props.isModalOn ? "modal display-flex" : "modal display-none";

  // Change display container modal
  var showHideContainerClassName = props.isModalOn ? "display-block" : "display-none";
  return /*#__PURE__*/React.createElement("div", {
    className: showHideContainerClassName
  }, /*#__PURE__*/React.createElement("div", {
    className: showHideClassName
  }, /*#__PURE__*/React.createElement("p", {
    className: "modal_text"
  }, props.content), /*#__PURE__*/React.createElement("p", {
    className: "button_close_container"
  }, /*#__PURE__*/React.createElement("i", {
    type: "button",
    onClick: props.closeModal,
    className: "close_modal fa fa-2x fa-times-circle-o",
    "aria-hidden": "true"
  }))));
}
var _default = Modal;
exports.default = _default;