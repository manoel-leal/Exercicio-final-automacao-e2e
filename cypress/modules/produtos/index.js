require('cypress-xpath');

function verificarTituloTodosProdutos(){
    cy.wait(1000)
    cy.xpath('//h2[text()="All Products"]') 
            .should('be.visible')
}

function clicarNoDetalheDoPrimeiroProdutoListado(){
    cy.xpath('//a[@href="/product_details/1"]').click()
}

function clicarEmAdicionarNoCarrinhoDoPrimeiroProdutoListado(){
    cy.xpath('(//a[text()="Add to cart"])[1]').click()
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

function clicarVisualizarCarrinho(){
    cy.xpath('//u[text()="View Cart"]/..').click()
}

module.exports = {
    verificarTituloTodosProdutos,
    clicarNoDetalheDoPrimeiroProdutoListado,
    pesquisarProduto,
    verificarProdutoPesquisado,
    clicarEmAdicionarNoCarrinhoDoPrimeiroProdutoListado,
    clicarVisualizarCarrinho
}