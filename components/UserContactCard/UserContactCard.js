import * as React from "../../_snowpack/pkg/react.js";
import useModal from "../../hooks/useModal.js";
import {
  UserContactsContext
} from "../../providers/UserContactsProvider.js";
import Button from "../Button/Button.js";
import ConfirmModal from "../ConfirmModal/ConfirmModal.js";
import UserContactModal, {
  UserContactType
} from "../UserContactModal/UserContactModal.js";
import "./UserContactCard.css.proxy.js";
const UserContactCard = ({
  userContact
}) => {
  const {id, firstName, lastName, age} = userContact;
  const {createUserContact, updateUserContact, deleteUserContact} = React.useContext(UserContactsContext);
  const confirmModalTitle = React.useMemo(() => /* @__PURE__ */ React.createElement(React.Fragment, null, "Are you sure you want to delete this contact ", firstName, " ", lastName, "?", /* @__PURE__ */ React.createElement("br", null), "This action cannot be undone!"), [firstName, lastName]);
  const confirmModalCb = React.useCallback((modalResponse) => {
    const {confirm} = modalResponse;
    if (confirm) {
      deleteUserContact(id);
    }
  }, [id, deleteUserContact]);
  const [showDeleteConfirmationModal] = useModal(ConfirmModal, {
    title: confirmModalTitle
  }, confirmModalCb);
  const updateUserContactModalCb = React.useCallback((modalResponse) => {
    const {confirm, userContact: userContact2} = modalResponse;
    if (!confirm) {
      return;
    }
    updateUserContact(userContact2);
  }, [updateUserContact]);
  const [showUserContactUpdateModal] = useModal(UserContactModal, {}, updateUserContactModalCb);
  return /* @__PURE__ */ React.createElement("div", {
    className: "UserContactCard"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "UserContactCard--start"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "UserContactCard--name"
  }, firstName, " ", lastName), /* @__PURE__ */ React.createElement("div", {
    className: "UserContactCard--age"
  }, age, " Year/s old")), /* @__PURE__ */ React.createElement("div", {
    className: "UserContactCard--end"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "UserContactCard--actions"
  }, /* @__PURE__ */ React.createElement(Button, {
    onClick: () => createUserContact(userContact)
  }, "Duplicate"), /* @__PURE__ */ React.createElement(Button, {
    onClick: () => showUserContactUpdateModal({
      title: "Update user contact",
      type: UserContactType.UPDATE,
      userContact
    })
  }, "Update"), /* @__PURE__ */ React.createElement(Button, {
    onClick: () => showDeleteConfirmationModal()
  }, "Delete"))));
};
export default React.memo(UserContactCard);
