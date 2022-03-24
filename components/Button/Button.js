import * as React from "../../_snowpack/pkg/react.js";
import "./Button.css.proxy.js";
const Button = ({
  children,
  type = "button",
  variant = "primary",
  outline = false,
  ...restProps
}) => {
  const outlineClass = outline ? "Button--outline" : "";
  return /* @__PURE__ */ React.createElement("button", {
    className: `Button Button--${variant} ${outlineClass}`,
    type,
    ...restProps
  }, children);
};
export default Button;
