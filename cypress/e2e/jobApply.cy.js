const careersPage = require("../support/page_objects/careers.page");
const expeditorsHomePage = require("../support/page_objects/expeditors.home.page");

let jobTitle, location, userData;

describe("Apply for the job", () => {
  before(() => {
    cy.fixture("textInputs.json").then((data) => {
      jobTitle = data.jobName;
      location = data.location;
    });
    cy.fixture("userData.json").then((data) => {
      userData = data;
    });
  });

  beforeEach(() => {
    cy.visit("/");
  });

  it("Apply for the job", () => {
    expeditorsHomePage.careersButton.should("be.visible").click();
    careersPage.jobListButton.should("be.visible").click();
    cy.waitForStableDOM();
    careersPage.searchInput.type(jobTitle);
    careersPage.locationSelect.click();
    careersPage.clickOnLocation(location);
    careersPage.searchButton.click();
    cy.waitForStableDOM();
    careersPage.clickOnJobByTitle(jobTitle);
    cy.origin("https://jobs.smartrecruiters.com/", () => {
      Cypress.require("cypress-iframe");
      const { registerCommand } = Cypress.require(
        "cypress-wait-for-stable-dom"
      );
      registerCommand();
      const jobInfoPage = Cypress.require(
        "../support/page_objects/job.info.page.js"
      );
      const applicationPage = Cypress.require(
        "../support/page_objects/application.page.js"
      );

      jobInfoPage.applyButton.click();
      cy.waitForStableDOM();

      applicationPage.fillAllFields(userData);
    });
  });
});
