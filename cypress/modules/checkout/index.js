require('cypress-xpath');

function verificarTelaCheckout(){
    cy.xpath('//h2[text()="Address Details"]').should('be.visible')
    cy.xpath('//h2[text()="Review Your Order"]').should('be.visible')
}

function clicarProsseguirParaPagamento(){
cy.xpath('//a[@href="/payment"]').click()
}

module.exports = {
    verificarTelaCheckout,
    clicarProsseguirParaPagamento
}