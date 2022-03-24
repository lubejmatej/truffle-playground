// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".UserContactCard {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border: 2px solid var(--border-color);\n  padding: 0.75rem 0.5rem 0.75rem 0.75rem;\n}\n\n.UserContactCard--start {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.UserContactCard--end {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n\n.UserContactCard--name {\n  color: var(--primary);\n}\n\n.UserContactCard--age {\n  display: flex;\n  align-self: flex-end;\n  margin-left: 0.5rem;\n  font-size: 0.75rem;\n  color: var(--light);\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}