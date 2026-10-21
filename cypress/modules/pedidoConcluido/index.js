require('cypress-xpath');

function verificarConclusaoPedido(){
    cy.wait(1000)
    cy.xpath('//b[text()="Order Placed!"]').should('be.visible')
    cy.xpath('//p[text()="Congratulations! Your order has been confirmed!"]').should('be.visible')
    
}


module.exports = {
    verificarConclusaoPedido
}