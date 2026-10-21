function informarDadosDoCartao(nomeCartao, numeroCartao, cvv, mesExpiracao, anoExpiracao){
    cy.get('input[data-qa*="name-on-card"]').type(nomeCartao)
    cy.get('input[data-qa*="card-number"]').type(numeroCartao)
    cy.get('input[data-qa*="cvc"]').type(cvv)
    cy.get('input[data-qa*="expiry-month"]').type(mesExpiracao)
    cy.get('input[data-qa*="expiry-year"]').type(anoExpiracao)

    cy.get('button[data-qa*="pay-button"]').click()
}

module.exports = {
    informarDadosDoCartao
}