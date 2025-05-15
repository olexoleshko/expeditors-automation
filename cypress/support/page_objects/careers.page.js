class CareersPage {
  get jobListButton() {
    return cy.get("a[href='/careers/jobs']", { timeout: 10000 });
  }

  get searchInput() {
    return cy.get("input[id='filter-by']");
  }

  get locationSelect() {
    return cy.get('[id="facet_location"] > span');
  }

  get searchButton() {
    return cy.get('input[class="srSearchButton"]');
  }

  clickOnJobByTitle(title) {
    cy.contains("td", title).click();
  }

  clickOnLocation(location) {
    cy.get(`[data-filter-value="${location}"]`).click();
  }
}

module.exports = new CareersPage();
