class ExpoHomePage {
  get signUpButton() {
    return cy.contains("Sign Up");
  }
}

module.exports = new ExpoHomePage();
