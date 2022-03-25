import * as React from "./_snowpack/pkg/react.js";
import * as ReactDOM from "./_snowpack/pkg/react-dom.js";
import ErrorBoundary from "./components/ErrorBundary/ErrorBundary.js";
import ModalContextProvider from "./providers/ModalProvider.js";
import Web3ContextProvider from "./providers/Web3Provider.js";
import "./styles.css.proxy.js";
const App = React.lazy(() => import("./App.js"));
const SuspenseComponent = () => /* @__PURE__ */ React.createElement(React.Fragment, null, "...");
ReactDOM.render(/* @__PURE__ */ React.createElement(ErrorBoundary, null, /* @__PURE__ */ React.createElement(ModalContextProvider, null, /* @__PURE__ */ React.createElement(Web3ContextProvider, null, /* @__PURE__ */ React.createElement(React.Suspense, {
  fallback: /* @__PURE__ */ React.createElement(SuspenseComponent, null)
}, /* @__PURE__ */ React.createElement(App, null))))), document.getElementById("app"));
