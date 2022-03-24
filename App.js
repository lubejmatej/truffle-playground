import * as React from "./_snowpack/pkg/react.js";
import Home from "./pages/Home/Home.js";
import UserContactsContextProvider from "./providers/UserContactsProvider.js";
import {Web3Context} from "./providers/Web3Provider.js";
import "./App.css.proxy.js";
const App = () => {
  const {
    state: {initialized},
    loadWeb3
  } = React.useContext(Web3Context);
  React.useEffect(() => {
    loadWeb3();
  }, [loadWeb3]);
  const wrapper = React.useCallback((wrapped) => /* @__PURE__ */ React.createElement("div", {
    className: "App"
  }, wrapped), []);
  if (!initialized) {
    return wrapper(/* @__PURE__ */ React.createElement("h2", null, "Please connect your Web3 wallet!"));
  }
  return wrapper(/* @__PURE__ */ React.createElement("div", {
    className: "App--container"
  }, /* @__PURE__ */ React.createElement(UserContactsContextProvider, null, /* @__PURE__ */ React.createElement(Home, null))));
};
export default App;
