require('cypress-xpath');

function verificarProdutoApresentado(titulo, categoria, preco, disponibilidade, condicao, marca){
    cy.xpath(`//h2[text()="${titulo}"]`)
        .should('be.visible')
    
    cy.xpath(`//p[text()="Category: ${categoria}"]`)
        .should('be.visible')

    cy.xpath(`//span[text()="Rs. ${preco}"]`)
        .should('be.visible')

    

    cy.xpath(`//p[text()=" ${disponibilidade}"]`)
        .should('be.visible')

    cy.xpath(`//p[text()=" ${condicao}"]`)
        .should('be.visible')
    
    cy.xpath(`//p[text()=" ${marca}"]`)
        .should('be.visible')

}

module.exports = {
    verificarProdutoApresentado
}