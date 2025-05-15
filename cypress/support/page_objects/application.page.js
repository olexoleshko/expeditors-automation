class ApplicationPage {
  get firstNameInput() {
    cy.get('spl-input[id="first-name-input"]');
  }

  get lastNameInput() {
    cy.get('spl-input[id="first-name-input"]');
  }

  get emailInput() {
    cy.get('spl-input[id="first-name-input"]');
  }

  get confirmEmailInput() {
    cy.get('spl-input[id="first-name-input"]');
  }

  get cityInput() {
    cy.get('spl-input[id="first-name-input"]');
  }

  get everettOption() {
    cy.get('[value="US_WA_CITY_everett"]');
  }

  get phoneInput() {
    cy.get('input[type="tel"]');
  }

  get linkedInInput() {
    cy.get('[id="linkedin-input"]');
  }

  get hiringTeamInput() {
    cy.get('[id="hiring-manager-message-input"]');
  }

  get dropField() {
    cy.get('input[id="file-input"]');
  }

  fillAllFields(data) {
    this.firstNameInput.shadow().find("input").type(data.firstName);
    this.lastNameInput.shadow().find("input").type(data.lastName);
    this.emailInput.shadow().find("input").type(data.email);
    this.confirmEmailInput.shadow().find("input").type(data.email);
    this.cityInput.shadow().find("input").type(data.city);
    this.everettOption.shadow().find("p").click();
    this.phoneInput.shadow().find("input").type(data.phone);
    this.linkedInInput.shadow().type(data.linkedIn);
    this.hiringTeamInput.shadow().type(data.hiringTeamMessage);

    this.dropField.attachFile("Resume.pdf", { subjectType: "drag-n-drop" });
  }
}
