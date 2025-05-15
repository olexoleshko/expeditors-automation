class JobInfoPage {
  get applyButton() {
    return cy.get('a[id="st-apply"]');
  }
}

module.exports = new JobInfoPage();
