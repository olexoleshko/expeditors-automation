class ShipmentsPage {
  get referenceNumbers() {
    return cy.get("tr > td:last-child");
  }
}

module.exports = new ShipmentsPage();
