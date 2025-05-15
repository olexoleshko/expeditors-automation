class ExpeditorsHomePage {
  get loginButton() {
    return cy.get('.login > a[href="https://go2expo.expeditors.com/landing"]');
  }

  get careersButton() {
    return cy.contains("a", "Careers", { timeout: 10000 });
  }

  get trackingSearchInput() {
    return cy.get('#track > [name="track-shipment"]', { timeout: 10000 });
  }

  get trackingSearchButton() {
    return cy.get('.input-wrap > input[name="trackingsubmitbtn"]', {
      timeout: 10000,
    });
  }
}

module.exports = new ExpeditorsHomePage();
