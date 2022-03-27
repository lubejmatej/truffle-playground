class HelperPO {
  private readonly baseUrl = Cypress.config().baseUrl;

  private readonly userContactCardLocator = '.UserContactList .UserContactCard';
  private readonly homeTitleLocator = '.Home > h1';

  navigateToHome() {
    cy.visit(this.baseUrl);
    return this;
  }

  shouldHaveTitle() {
    cy.get(this.homeTitleLocator).should(
      'contain.text',
      'Hello Truffle playground'
    );
    return this;
  }

  shouldDisplayContactCards() {
    cy.get(this.userContactCardLocator).should('have.length.gt', 0);
    return this;
  }
}

export default HelperPO;
