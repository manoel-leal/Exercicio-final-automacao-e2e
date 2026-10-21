function realizarLogin(email, senha){
        cy.get('input[data-qa*=login-email]').type(email)
        cy.get('input[data-qa*=login-password]').type(senha)

        cy.get('[data-qa*=login-button]').click()
}

function verificarSeLoginFoiEfetuadoComSucesso(){
        cy.wait(1000)
        cy.contains('.navbar-nav li', 'PGATS AUT')
        cy.get('.navbar-nav li')
            .contains('PGATS AUT')
            .should('be.visible')
}

function realizarLogout(){
    cy.get('a[href*="logout"]')
      .should('be.visible')
      .click()

    cy.get('.login-form > h2').should('be.visible')
    cy.get('a[href*="logout"]').should('not.exist')
    cy.get('[action*="login"]').should('be.visible');
    cy.url().should('include', 'login')
}

function verificarLoginComDadosInvalidos(){
    cy.get('form[action*="login"] > p')
      .should('exist')
      .should('be.visible')
      .should('contain', 'Your email or password is incorrect!')
      .and('contain.text', 'Your email or password is incorrect!')
}

module.exports = {
    realizarLogin,
    verificarSeLoginFoiEfetuadoComSucesso,
    verificarLoginComDadosInvalidos,
    realizarLogout
}


