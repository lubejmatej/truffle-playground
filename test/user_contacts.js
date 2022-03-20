const UserContacts = artifacts.require("UserContacts");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract('UserContacts', (/* accounts */) => {
    before(async () => {
        this.userContactsInstance = await UserContacts.deployed();
    });

    it('should deploy successfully', async () => {
        const address = await this.userContactsInstance.address;

        assert.notEqual(address, 0x0);
        assert.notEqual(address, null);
        assert.notEqual(address, undefined);
        assert.notEqual(address, '');
    });

    it('should list pre-created user contact', async () => {
        const userContactCount = await this.userContactsInstance.userContactCount();
        const userContact = await this.userContactsInstance.userContacts(userContactCount);

        assert.equal(userContactCount.toNumber(), 1);

        assert.equal(userContact.id.toNumber(), userContactCount.toNumber());
        assert.equal(userContact.firstName, 'Matej');
        assert.equal(userContact.lastName, 'Lubej');
        assert.equal(userContact.telNumber, '+38640040040');
        assert.equal(userContact.email, 'info@trufflesuite.com');
        assert.equal(userContact.age.toNumber(), 5);
        assert.equal(userContact.avatarUrl, 'https://img.rarible.com/prod/image/upload/t_image_big/prod-itemImages/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d:5849/194634c7');
        assert.equal(userContact.websiteUrl, 'https://rarible.com/');
        assert.equal(userContact.tags, 'tag1;tag2');
    });

    it('should create user contact', async () => {
        await this.userContactsInstance.createUserContact('Matej2', 'Lubej2', '+38640040040', 'info@trufflesuite.com', 5, 'https://img.rarible.com/prod/image/upload/t_image_big/prod-itemImages/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d:5849/194634c7', 'https://rarible.com/', 'tag1;tag2');
        const userContactCount = await this.userContactsInstance.userContactCount();
        const userContact = await this.userContactsInstance.userContacts(userContactCount);

        assert.equal(userContactCount.toNumber(), 2);

        assert.equal(userContact.id.toNumber(), userContactCount.toNumber());
        assert.equal(userContact.firstName, 'Matej2');
        assert.equal(userContact.lastName, 'Lubej2');
        assert.equal(userContact.telNumber, '+38640040040');
        assert.equal(userContact.email, 'info@trufflesuite.com');
        assert.equal(userContact.age.toNumber(), 5);
        assert.equal(userContact.avatarUrl, 'https://img.rarible.com/prod/image/upload/t_image_big/prod-itemImages/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d:5849/194634c7');
        assert.equal(userContact.websiteUrl, 'https://rarible.com/');
        assert.equal(userContact.tags, 'tag1;tag2');
    });

    it('should update user contact', async () => {
        await this.userContactsInstance.updateUserContact(2, 'Matej2u', 'Lubej2u', '+38640040040u', 'info@trufflesuite.comu', 7, 'https://img.rarible.com/prod/image/upload/t_image_big/prod-itemImages/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d:5849/194634c7u', 'https://rarible.com/u', 'tag1;tag2u');
        const userContactCount = await this.userContactsInstance.userContactCount();
        const userContact = await this.userContactsInstance.userContacts(userContactCount);

        assert.equal(userContactCount.toNumber(), 2);

        assert.equal(userContact.id.toNumber(), userContactCount.toNumber());
        assert.equal(userContact.firstName, 'Matej2u');
        assert.equal(userContact.lastName, 'Lubej2u');
        assert.equal(userContact.telNumber, '+38640040040u');
        assert.equal(userContact.email, 'info@trufflesuite.comu');
        assert.equal(userContact.age.toNumber(), 7);
        assert.equal(userContact.avatarUrl, 'https://img.rarible.com/prod/image/upload/t_image_big/prod-itemImages/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d:5849/194634c7u');
        assert.equal(userContact.websiteUrl, 'https://rarible.com/u');
        assert.equal(userContact.tags, 'tag1;tag2u');
    });

    it('should delete user contact', async () => {
        await this.userContactsInstance.deleteUserContact(2);
        const userContactCount = await this.userContactsInstance.userContactCount();
        const userContact = await this.userContactsInstance.userContacts(userContactCount);

        assert.equal(userContactCount.toNumber(), 2);

        assert.equal(userContact.id.toNumber(), 0);
        assert.equal(userContact.firstName, '');
        assert.equal(userContact.lastName, '');
        assert.equal(userContact.telNumber, '');
        assert.equal(userContact.email, '');
        assert.equal(userContact.age.toNumber(), 0);
        assert.equal(userContact.avatarUrl, '');
        assert.equal(userContact.websiteUrl, '');
        assert.equal(userContact.tags, '');
    })
});
