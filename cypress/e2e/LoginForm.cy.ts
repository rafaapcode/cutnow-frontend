describe('Login Form', () => {
  beforeEach(() => cy.visit('/'));
  it('Should appears alert when email is invalid', () => {
    cy.get('[data-test="input-email-login"]').type(" ");
    cy.get('[data-test="submit-button-login"]').click();
    cy.get(".go4109123758").contains(/Email inválido/i);
    cy.get(".go4109123758").contains(/A senha deve ter no mínimo 8 caracteres./i);
  })
  it('Should appears alert when password is invalid', () => {
    cy.get('[data-test="input-email-login"]').type("teste@example.com");
    cy.get('[data-test="submit-button-login"]').click();
    cy.get(".go4109123758").contains(/A senha deve ter no mínimo 8 caracteres./i);
  })
  it('Should admin select button must be selected by default', () => {
    cy.get('[data-test="button-adm-select"]').should('have.class', 'bg-terciary-green shadow-md shadow-[#AAD704] text-black');
    cy.get('[data-test="button-barber-select"]').should('not.have.class', 'bg-terciary-green shadow-md shadow-[#AAD704] text-black');
  })
  it('Should barber select button must be selected when is clicked', () => {
    cy.get('[data-test="button-barber-select"]').click();
    cy.get('[data-test="button-barber-select"]').should('have.class', 'bg-terciary-green shadow-md shadow-[#AAD704] text-black');
    cy.get('[data-test="button-adm-select"]').should('not.have.class', 'bg-terciary-green shadow-md shadow-[#AAD704] text-black');
  })
  it('Should redirect to the signup page , when the signup link is clicked', () => {
    cy.get('[data-test="link-signup"]').click();
    cy.url().should('include', '/signup')
    cy.visit("/")
  })
})