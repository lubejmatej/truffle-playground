// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".App {\n  width: 100vw;\n  height: 100vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n.App h2 {\n  text-align: center;\n  color: var(--warning);\n}\n\n.App--container {\n  max-width: 800px;\n  margin: 0 auto;\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}