// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".ConfirmModal--header {\n  padding: 0.5rem 0.75rem;\n}\n\n.ConfirmModal--footer {\n  display: flex;\n  justify-content: space-between;\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}