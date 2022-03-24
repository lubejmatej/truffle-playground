import * as React from "../../_snowpack/pkg/react.js";
import Button from "../Button/Button.js";
import Modal from "../Modal/Modal.js";
import "./ConfirmModal.css.proxy.js";
const ConfirmModal = ({title, onClose}) => {
  return /* @__PURE__ */ React.createElement(Modal, {
    maxWidth: 650
  }, /* @__PURE__ */ React.createElement("div", {
    className: "ConfirmModal--header"
  }, title), /* @__PURE__ */ React.createElement("div", {
    className: "ConfirmModal--footer"
  }, /* @__PURE__ */ React.createElement(Button, {
    onClick: () => onClose({confirm: false})
  }, "Cancel"), /* @__PURE__ */ React.createElement(Button, {
    variant: "secondary",
    onClick: () => onClose({confirm: true})
  }, "Ok")));
};
export default React.memo(ConfirmModal);
