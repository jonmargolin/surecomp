import { getGreeting } from '../support/app.po';

describe('surecomp', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to surecomp!');
  });
});
