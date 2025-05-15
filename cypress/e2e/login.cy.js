const expeditorsHomePage = require("../support/page_objects/expeditors.home.page");

let userData, messages;

describe("Login", () => {
  before(() => {
    cy.fixture("userData.json").then((data) => {
      userData = data;
    });
    cy.fixture("textValidation.json").then((data) => {
      messages = data;
    });
  });

  it("Should not login with invalid input", () => {
    cy.origin(
      "https://login.expeditors.com",
      { args: { userData, messages } },
      ({ userData, messages }) => {
        cy.visit("/login");
        const loginPage = Cypress.require("../support/page_objects/login.page");

        loginPage.emailInput.type(userData.email);
        loginPage.passwordInput.type(userData.password);
        loginPage.signInButton.click();

        cy.contains(messages.invalidCredentials);
      }
    );
  });

  it("Should show password", () => {
    cy.origin(
      "https://login.expeditors.com",
      { args: { userData } },
      ({ userData }) => {
        cy.visit("/");
        const loginPage = Cypress.require("../support/page_objects/login.page");

        loginPage.passwordInput.type(userData.password);
        loginPage.showPasswordButton.click();

        loginPage.visiblePassword.should("have.value", userData.password);
      }
    );
  });
});
