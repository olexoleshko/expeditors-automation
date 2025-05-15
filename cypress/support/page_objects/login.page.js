class LoginPage {
  get emailInput() {
    return cy.get('input[name="email"]');
  }

  get passwordInput() {
    return cy.get('input[name="password"]');
  }

  get signInButton() {
    return cy.get('button[aria-label="Sign In"]');
  }

  get showPasswordButton() {
    return cy.get('label[title="Show password"]');
  }

  get visiblePassword() {
    return cy.get('input[type="text"]');
  }
}

module.exports = new LoginPage();
