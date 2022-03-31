import * as React from "../../_snowpack/pkg/react.js";
import "./Button.css.proxy.js";
const Button = ({
  children,
  type = "button",
  variant = "primary",
  outline = false,
  ...restProps
}) => {
  const classNames = [
    "Button",
    `Button--${variant}`,
    ...outline ? ["Button--outline"] : []
  ];
  return /* @__PURE__ */ React.createElement("button", {
    className: classNames.join(" "),
    type,
    ...restProps
  }, children);
};
export default Button;
