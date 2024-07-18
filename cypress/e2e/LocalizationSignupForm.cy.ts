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
  });
  it("Should localization form is visible", () => {
    cy.get('[data-test="localization-step-form"]').should("be.visible");
  });
  it("Should CEP field error appear if the field have less than 8 characters", () => {
    cy.get('[data-test="cep-field"]').type("123");
    cy.get('[data-test="number-field"]').focus();
    cy.get('[data-test="cep-field-error"]').should("be.visible");
  });
  it("Should CEP field error appear if the cep is invalid", () => {
    cy.get('[data-test="cep-field"]').type("12345678");
    cy.get('[data-test="number-field"]').focus();
    cy.get('[data-test="cep-field-error"]').should("be.visible");
  });
  it("Should CEP field error appear if the cep contains letters", () => {
    cy.get('[data-test="cep-field"]').type("1234567a");
    cy.get('[data-test="number-field"]').focus();
    cy.get('[data-test="cep-field-error"]').should("be.visible");
  });
  it("Should NUMBER field error appear if the number is invalid", () => {
    cy.get('[data-test="number-field"]').focus();
    cy.get('[data-test="cep-field"]').type("59074471");
    cy.get('[data-test="number-field-error"]').should("be.visible");
  });
  it("Should CEP Informations fields fill when the user digit a correct CEP", () => {
    cy.get('[data-test="cep-field"]').type("59074471");
    cy.intercept("GET", "https://viacep.com.br/ws/59074471/json/", {
      statusCode: 200,
      body: {
        logradouro: "Vila Felipe Dias",
        bairro: "Felipe Camarão",
        uf: "RN",
        localidade: "Natal"
      }
    })
    cy.get('[data-test="number-field"]').type("00");
    cy.get('[data-test="next-button-step"]').should("not.have.attr", "disabled");
    cy.get('[data-test="rua-field"]').should("have.value", "Vila Felipe Dias")
    cy.get('[data-test="bairro-field"]').should("have.value", "Felipe Camarão")
    cy.get('[data-test="cidade-field"]').should("have.value", "Natal")
    cy.get('[data-test="estado-field"]').should("have.value", "RN")
  });
});