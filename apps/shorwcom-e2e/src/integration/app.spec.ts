import { getGreeting } from '../support/app.po';

describe('shorwcom', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to shorwcom!');
  });
});
