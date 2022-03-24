// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".UserContactList {\n  width: 100%;\n}\n\n.UserContactList--header {\n  display: flex;\n  justify-content: flex-end;\n  padding-bottom: 0.75rem;\n}\n\n.UserContactList .UserContactCard:not(:last-child) {\n  margin-bottom: 1rem;\n}\n\n.UserContactList .UserContactCard:last-child {\n  margin-bottom: 3rem;\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}