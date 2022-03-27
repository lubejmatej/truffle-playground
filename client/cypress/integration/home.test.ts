/// <reference types="Cypress" />
import HelperPO from '../support/helper.po';

describe('Homepage test', () => {
  let helperPO!: HelperPO;

  before(() => {
    helperPO = new HelperPO();
  });

  it('should display title', () => {
    helperPO.navigateToHome().shouldHaveTitle();
  });

  it('should have user contacts listed', () => {
    helperPO.navigateToHome().shouldDisplayContactCards();
  });
});
