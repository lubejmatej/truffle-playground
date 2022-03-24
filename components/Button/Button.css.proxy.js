// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".Button {\n  --button-color: var(--dark);\n\n  border-radius: 0;\n  outline: none;\n  cursor: pointer;\n  display: inline-block;\n  font-weight: 400;\n  line-height: 1.5;\n  text-align: center;\n  text-decoration: none;\n  vertical-align: middle;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  background-color: transparent;\n  padding: 0.5rem 0.75rem;\n  font-size: 1rem;\n  box-shadow: none;\n  border: 0;\n\n  color: var(--button-color);\n}\n\n.Button:not(:disabled) {\n  cursor: pointer;\n}\n\n.Button--outline {\n  border: 1px solid currentColor;\n}\n\n.Button--primary {\n  --button-color: var(--primary);\n}\n\n.Button--secondary {\n  --button-color: var(--warning);\n}\n\n.Button--primary:hover,\n.Button--secondary:hover {\n  --button-color: var(--light);\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}