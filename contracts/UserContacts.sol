// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract UserContacts {
    uint public userContactCount = 0;

    struct UserContact {
        uint id;
        string firstName;
        string lastName;
        string telNumber;
        string email;
        uint age;
        string avatarUrl;
        string websiteUrl;
        string tags;
    }

    mapping(uint => UserContact) public userContacts;

    event UserContactCreated(uint id);
    event UserContactUpdated(uint id);
    event UserContactDeleted(uint id);

    constructor() {
        createUserContact("Matej", "Lubej", "+38640040040", "info@trufflesuite.com", 5, "https://img.rarible.com/prod/image/upload/t_image_big/prod-itemImages/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d:5849/194634c7", "https://rarible.com/", "tag1;tag2");
    }

    function createUserContact(string memory _firstName, string memory _lastName, string memory _telNumber, string memory _email, uint _age, string memory _avatarUrl, string memory _websiteUrl, string memory _tags) public {
        userContactCount++;
        userContacts[userContactCount] = UserContact(userContactCount, _firstName, _lastName, _telNumber, _email, _age, _avatarUrl, _websiteUrl, _tags);

        emit UserContactCreated(userContactCount);
    }

    function updateUserContact(uint _id, string memory _firstName, string memory _lastName, string memory _telNumber, string memory _email, uint _age, string memory _avatarUrl, string memory _websiteUrl, string memory _tags) public {
        UserContact memory _userContact = userContacts[_id];
        _userContact.firstName = _firstName;
        _userContact.lastName = _lastName;
        _userContact.telNumber = _telNumber;
        _userContact.email = _email;
        _userContact.age = _age;
        _userContact.avatarUrl = _avatarUrl;
        _userContact.websiteUrl = _websiteUrl;
        _userContact.tags = _tags;
        userContacts[_id] = _userContact;

        emit UserContactUpdated(_id);
    }


    function deleteUserContact(uint _id) public {
        if (_id > 0 && _id <= userContactCount) {
            delete userContacts[_id];

            emit UserContactDeleted(_id);
        }
    }
}
