require('cypress-xpath');

function acessarMenuCadastro(){
    cy.get('a[href*="login"]').click()
}

function acessarMenuProdutos(){
    cy.xpath('//a[@href="/products"]').click()
}

function rolarParaRodapePagina(){
    cy.scrollTo('bottom')
}

function verificarTituloSubscricao(){
    cy.xpath('//h2[text()="Subscription"]')
        .should('be.visible')
}

function informarEmailSubscricao(email){
    cy.xpath('//input[@id="susbscribe_email"]').type(email)
    cy.xpath('//button[@id="subscribe"]').click()
}

function verificarMensagemDeEnvioDeSubscricaoSucesso(){
    cy.xpath('//div[@class="alert-success alert"]')
        .should('be.visible')
        .and('contain', 'You have been successfully subscribed!')
}

module.exports = {
    acessarMenuCadastro,
    acessarMenuProdutos,
    rolarParaRodapePagina,
    verificarTituloSubscricao,
    informarEmailSubscricao,
    verificarMensagemDeEnvioDeSubscricaoSucesso
}