describe("Info signUp Form", () => {
  beforeEach(() => cy.visit("/signup"));
  it("Should info form is visible", () => {
    cy.get('[data-test="info-step-form"]').should("be.visible");
  });
  it("Should next button DISABLED if the form is invalid", () => {
    cy.get('[data-test="next-button-step"]').should("have.attr", "disabled");
  });
  it("Should name field error appear if the field have less than 3 characters", () => {
    cy.get('[data-test="name-field"]').type("br");
    cy.get('[data-test="barbershopname-field"]').focus();
    cy.get('[data-test="name-field-error"]').should("be.visible");
  });
  it("Should barbershop name field error appear if the field have less than 3 characters", () => {
    cy.get('[data-test="barbershopname-field"]').type("br");
    cy.get('[data-test="name-field"]').focus();
    cy.get('[data-test="barbershopname-field-error"]').should("be.visible");
  });
  it("Should email field error appear if the email is invalid", () => {
    cy.get('[data-test="email-field"]').type("teste");
    cy.get('[data-test="name-field"]').focus();
    cy.get('[data-test="email-field-error"]').should("be.visible");
  });
  it("Should email field error appear if the domain email is not valid", () => {
    cy.get('[data-test="email-field"]').type("teste@teste.com");
    cy.get('[data-test="name-field"]').focus();
    cy.get('[data-test="email-field-error"]').should("be.visible");
  });
  it("Should cnpj field error appear if the cnpj have less than 14 characters", () => {
    cy.get('[data-test="cnpj-field"]').type("12345");
    cy.get('[data-test="email-field"]').focus();
    cy.get('[data-test="cnpj-field-error"]').should("be.visible");
  });
  it("Should cnpj field error appear if the cnpj is invalid", () => {
    cy.get('[data-test="cnpj-field"]').type("12345678912345");
    cy.get('[data-test="email-field"]').focus();
    cy.get('[data-test="cnpj-field-error"]').should("be.visible");
  });
  it("Should password field error appear if the password is less than 8 characters", () => {
    cy.get('[data-test="password-field"]').type("qweasdz");
    cy.get('[data-test="cnpj-field"]').focus();
    cy.get('[data-test="password-field-error"]').should("be.visible");
  });
  it("Should password field error appear if the password is not strong", () => {
    cy.get('[data-test="password-field"]').type("qweasdzx");
    cy.get('[data-test="cnpj-field"]').focus();
    cy.get('[data-test="password-field-error"]').should("be.visible");
  });
  it("Should confirm password field error appear if the password is not equal to the password field", () => {
    cy.get('[data-test="password-field"]').type("Qwertyuop03@!");
    cy.get('[data-test="confirmpassword-field"]').type("Qwertyuop03@");
    cy.get('[data-test="password-field"]').focus();
    cy.get('[data-test="confirmpassword-field-error"]').should('be.visible');
  });
  it("Should next button is enabled if all field is valid", () => {
    cy.get('[data-test="name-field"]').type("teste");
    cy.get('[data-test="barbershopname-field"]').type("barbers");
    cy.get('[data-test="email-field"]').type("teste@gmail.com");
    cy.get('[data-test="cnpj-field"]').type("53987908000105");
    cy.get('[data-test="password-field"]').type("Qwertyuop03@!");
    cy.get('[data-test="confirmpassword-field"]').type("Qwertyuop03@!");
    cy.get('[data-test="next-button-step"]').should("not.have.attr", "disabled");
  });
});