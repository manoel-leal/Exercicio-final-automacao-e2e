function acessarMenuCadastro(){
    cy.get('a[href*=login]').click()
}

module.exports = {
    acessarMenuCadastro
}