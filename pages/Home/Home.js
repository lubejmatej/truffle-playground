import * as React from "../../_snowpack/pkg/react.js";
import UserContactList from "../../components/UserContactList/UserContactList.js";
import {UserContactsContext} from "../../providers/UserContactsProvider.js";
import {Web3Context} from "../../providers/Web3Provider.js";
import "./Home.css.proxy.js";
const Home = () => {
  const {
    state: {initialized}
  } = React.useContext(Web3Context);
  const {loadUserContacts} = React.useContext(UserContactsContext);
  React.useEffect(() => {
    if (initialized) {
      loadUserContacts();
    }
  }, [initialized]);
  return /* @__PURE__ */ React.createElement("div", {
    className: "Home"
  }, /* @__PURE__ */ React.createElement("h1", null, "Hello Truffle playground"), /* @__PURE__ */ React.createElement(UserContactList, null));
};
export default Home;
