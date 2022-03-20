const UserContacts = artifacts.require("UserContacts");

module.exports = function (deployer) {
    deployer.deploy(UserContacts);
};
