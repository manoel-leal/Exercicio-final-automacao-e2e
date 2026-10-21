require('cypress-xpath');

function verificarTituloTodosProdutos(){
    cy.xpath('//h2[text()="All Products"]') 
            .should('be.visible')
}

function clicarNoDetalheDoPrimeiroProdutoListado(){
    cy.xpath('//a[@href="/product_details/1"]').click()
}

function pesquisarProduto(produto){
    cy.xpath('//input[@id="search_product"]').type(produto)
    cy.xpath('//button[@id="submit_search"]').click()
    cy.wait(2000)
}

function verificarProdutoPesquisado(produto){
    cy.xpath(`//p[text()='${produto}']`)
        .should('be.visible')
    //div[@class='single-products']/div/p[text()='${produto}']
}

module.exports = {
    verificarTituloTodosProdutos,
    clicarNoDetalheDoPrimeiroProdutoListado,
    pesquisarProduto,
    verificarProdutoPesquisado
}