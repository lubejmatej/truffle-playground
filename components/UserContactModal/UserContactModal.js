import * as React from "../../_snowpack/pkg/react.js";
import useForm from "../../hooks/useForm.js";
import Utils from "../../utils/utils.js";
import ValidatorUtils from "../../utils/validator.utils.js";
import Button from "../Button/Button.js";
import Modal from "../Modal/Modal.js";
import "./UserContactModal.css.proxy.js";
export var UserContactType;
(function(UserContactType2) {
  UserContactType2[UserContactType2["CREATE"] = 0] = "CREATE";
  UserContactType2[UserContactType2["UPDATE"] = 1] = "UPDATE";
})(UserContactType || (UserContactType = {}));
const userContactInitialValue = {
  id: "",
  firstName: "",
  lastName: "",
  telNumber: "",
  email: "",
  age: "",
  avatarUrl: "",
  websiteUrl: "",
  tags: ""
};
const UserContactModal = ({
  title,
  type,
  userContact = {...userContactInitialValue},
  onClose
}) => {
  const isUpdateMode = React.useMemo(() => type === 1, [type]);
  const onSubmit = React.useCallback((formData) => {
    onClose?.({
      userContact: formData,
      type,
      confirm: true
    });
  }, [onClose, type]);
  const {inputs, handleInputChange, handleSubmit} = useForm(userContact, onSubmit);
  const renderFormGroup = React.useCallback(({
    name,
    disabled,
    type: type2,
    ...rest
  }) => /* @__PURE__ */ React.createElement("div", {
    className: "form-group"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: name
  }, Utils.camelCaseToString(name)), /* @__PURE__ */ React.createElement("input", {
    id: name,
    type: type2 ?? "text",
    name,
    value: inputs[name],
    onChange: handleInputChange,
    disabled: disabled ?? false,
    required: true,
    ...rest
  })), [inputs, handleInputChange]);
  return /* @__PURE__ */ React.createElement(Modal, {
    maxWidth: 600
  }, /* @__PURE__ */ React.createElement("form", {
    onSubmit: handleSubmit
  }, /* @__PURE__ */ React.createElement("div", {
    className: "UserContactModal--header"
  }, title), /* @__PURE__ */ React.createElement("div", {
    className: "UserContactModal--content"
  }, isUpdateMode && renderFormGroup({name: "id", disabled: true}), renderFormGroup({name: "firstName"}), renderFormGroup({name: "lastName"}), renderFormGroup({
    name: "telNumber",
    type: "tel",
    pattern: ValidatorUtils.TelNumberReg()
  }), renderFormGroup({name: "email", type: "email"}), renderFormGroup({name: "age", type: "number", min: 0}), renderFormGroup({
    name: "avatarUrl",
    pattern: ValidatorUtils.UrlReg()
  }), renderFormGroup({
    name: "websiteUrl",
    pattern: ValidatorUtils.UrlReg()
  }), renderFormGroup({name: "tags"})), /* @__PURE__ */ React.createElement("div", {
    className: "UserContactModal--footer"
  }, /* @__PURE__ */ React.createElement(Button, {
    onClick: () => onClose({confirm: false})
  }, "Cancel"), /* @__PURE__ */ React.createElement(Button, {
    type: "submit",
    variant: "secondary"
  }, "Save"))));
};
export default React.memo(UserContactModal);
