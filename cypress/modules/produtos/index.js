require('cypress-xpath');

function verificarTituloTodosProdutos(){
    cy.xpath('//h2[text()="All Products"]') 
            .should('be.visible')
}

function clicarNoDetalheDoPrimeiroProdutoListado(){
    cy.xpath('//a[@href="/product_details/1"]').click()
}

module.exports = {
    verificarTituloTodosProdutos,
    clicarNoDetalheDoPrimeiroProdutoListado
}