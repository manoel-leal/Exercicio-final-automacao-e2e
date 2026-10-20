/// <reference types="cypress" />

const cadastro = require('../modules/cadastro/index.js')
const login = require('../modules/login/index.js')

describe('Automation Excercise', () =>{
    it('Cadastrar um novo usuário com sucesso', () =>{
        cy.visit('https://automationexercise.com/')
        cy.get('a[href*=login]').click()
        
        cadastro.iniciarCadastro(`pgats_${Date.now()}@test.com`)
        cadastro.preencherCadastro()
        cadastro.verificarCadastroEfetuadoSucesso()
    })

    it('Efetuar Login de Usuário com email e senha corretos', () => {
        cy.visit('https://automationexercise.com/login')

        login.realizarLogin('pgats_1792346971566@test.com', '123456')
        login.verificarSeLoginFoiEfetuadoComSucesso()
    })

    it('Efetuar Login de Usuário email e senha INCORRETOS', () => {
        cy.visit('https://www.automationexercise.com/login')

        login.realizarLogin('pgats_1792346971566@test.com', '12345')
        login.verificarLoginComDadosInvalidos()

     })

    it('Efetuar Logout', () => {
        cy.visit('https://www.automationexercise.com/login')

        // ACT
        login.realizarLogin('pgats_1792346971566@test.com', '123456')

        // assert do login
        login.realizarLogout()

    })

  it('Tentar cadastrar usuário com e-mail já cadastrado', () => {
    cy.visit('https://www.automationexercise.com')
    cy.get('a[href*=login]').click()

    cadastro.iniciarCadastro('pgats_1792346971566@test.com')

    cadastro.verificarQueUsuarioJaFoiCadastrado()

  })
    
})

