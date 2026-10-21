require('cypress-xpath');

function clicarProsseguirComCheckout(){
    cy.wait(1000)
    cy.xpath('//a[text()="Proceed To Checkout"]').click()
}

module.exports = {
    clicarProsseguirComCheckout
}