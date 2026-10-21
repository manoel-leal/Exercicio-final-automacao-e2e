require('cypress-xpath');

function acessarMenuCadastro(){
    cy.get('a[href*="login"]').click()
}

function acessarMenuProdutos(){
cy.xpath('//a[@href="/products"]').click()
}

module.exports = {
    acessarMenuCadastro,
    acessarMenuProdutos
}