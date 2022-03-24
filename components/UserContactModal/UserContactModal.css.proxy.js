// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".UserContactModal--header {\n  padding-bottom: 1.5rem;\n  text-transform: capitalize;\n}\n\n.UserContactModal--footer {\n  display: flex;\n  justify-content: space-between;\n  margin: 0 -0.75rem;\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}