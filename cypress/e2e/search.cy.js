const expeditorsHomePage = require("../support/page_objects/expeditors.home.page");

let trackingNumber, invalidTrackingNumber, messages;

describe("Shipment Search", () => {
  before(() => {
    cy.fixture("textInputs.json").then((data) => {
      trackingNumber = data.trackingNumber;
      invalidTrackingNumber = data.invalidTrackingNumber;
    });
    cy.fixture("textValidation.json").then((errors) => {
      messages = errors;
    });
  });

  beforeEach(() => {
    cy.visit("/");
  });

  it("Should find shipment with valid tracking number", () => {
    expeditorsHomePage.trackingSearchInput.type(trackingNumber);
    expeditorsHomePage.trackingSearchButton.click();

    cy.origin("https://go2expo.expeditors.com/", () => {
      const shipmentsPage = require("../support/page_objects/shipments.page");

      shipmentsPage.referenceNumbers.forEach((referenceNumber) => {
        referenceNumber.invoke("text").should("contain", trackingNumber);
      });
    });
  });

  it("Should not find shipment with invalid tracking number", () => {
    expeditorsHomePage.trackingSearchInput.type(invalidTrackingNumber);
    expeditorsHomePage.trackingSearchButton.click();

    cy.origin("https://go2expo.expeditors.com/", () => {
      cy.url().should("contain", `/shipments/${trackingNumber}`);
      cy.contains(messages.noneResults);
    });
  });
});
