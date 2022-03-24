import * as React from "../../_snowpack/pkg/react.js";
import "./Modal.css.proxy.js";
const Modal = ({children, maxWidth}) => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "Modal--backdrop"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "Modal",
    style: {maxWidth}
  }, children));
};
export default Modal;
