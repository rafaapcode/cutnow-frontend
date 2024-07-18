describe("Localization signUp Form", () => {
  beforeEach(() => {
    cy.visit("/signup")
    cy.get('[data-test="name-field"]').type("teste");
    cy.get('[data-test="barbershopname-field"]').type("barbers");
    cy.get('[data-test="email-field"]').type("teste@gmail.com");
    cy.get('[data-test="cnpj-field"]').type("53987908000105");
    cy.get('[data-test="password-field"]').type("Qwertyuop03@!");
    cy.get('[data-test="confirmpassword-field"]').type("Qwertyuop03@!");
    cy.get('[data-test="next-button-step"]').should("not.have.attr", "disabled");
    cy.get('[data-test="next-button-step"]').click();
    cy.wait(500);
    cy.get('[data-test="cep-field"]').type("59074471");
    cy.get('[data-test="number-field"]').type("00");
    cy.get('[data-test="next-button-step"]').should("not.have.attr", "disabled");
    cy.get('[data-test="rua-field"]').should("have.value", "Vila Felipe Dias");
    cy.get('[data-test="bairro-field"]').should("have.value", "Felipe Camarão");
    cy.get('[data-test="cidade-field"]').should("have.value", "Natal");
    cy.get('[data-test="estado-field"]').should("have.value", "RN");
    cy.get('[data-test="next-button-step"]').click();
  });
  it("Should localization form is visible", () => {
    cy.get('[data-test="service-step-form"]').should("be.visible");
    cy.get('[data-test="service-field"]').should("have.length", 2);
  });
  it("Should add a service", () => {
    cy.get('[data-test="addservice-btn"]').click();
    cy.get('[data-test="service-field"]').should("have.length", 3);
  });
});