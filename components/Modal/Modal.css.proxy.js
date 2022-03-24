// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".Modal--backdrop {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100vw;\n  z-index: 1000;\n  background-color: var(--dark);\n  opacity: 0.5;\n}\n\n.Modal {\n  z-index: 1001;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border: 1px solid var(--border-color);\n  background: var(--bg-color);\n  width: 100vw;\n  padding: 2rem;\n  color: var(--light);\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}