import * as React from "../../_snowpack/pkg/react.js";
import useModal from "../../hooks/useModal.js";
import {
  UserContactsContext
} from "../../providers/UserContactsProvider.js";
import Button from "../Button/Button.js";
import UserContactCard from "../UserContactCard/UserContactCard.js";
import UserContactModal, {
  UserContactType
} from "../UserContactModal/UserContactModal.js";
import "./UserContactList.css.proxy.js";
const UserContactList = () => {
  const {
    state: {userContacts},
    createUserContact
  } = React.useContext(UserContactsContext);
  const [showUserContactCreateModal] = useModal(UserContactModal, {}, React.useCallback((modalResponse) => {
    const {confirm, userContact} = modalResponse;
    if (!confirm) {
      return;
    }
    createUserContact(userContact);
  }, [createUserContact]));
  return /* @__PURE__ */ React.createElement("div", {
    className: "UserContactList"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "UserContactList--header"
  }, /* @__PURE__ */ React.createElement(Button, {
    outline: true,
    onClick: () => showUserContactCreateModal({
      title: "Create user contact",
      type: UserContactType.CREATE
    })
  }, "Create contact")), userContacts.map((userContact) => /* @__PURE__ */ React.createElement(UserContactCard, {
    key: userContact.id,
    userContact
  })));
};
export default UserContactList;
