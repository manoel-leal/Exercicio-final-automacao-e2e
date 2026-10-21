/// <reference types="cypress" />

const header = require('../modules/header/index.js')
const cadastro = require('../modules/cadastro/index.js')
const login = require('../modules/login/index.js')
const produtos = require('../modules/produtos/index.js')
const detalheProduto = require('../modules/detalheProduto/index.js')
const usuarios = require('../fixtures/usuarios.json')

describe('Automation Excercise', () =>{
    it('Cadastrar um novo usuário com sucesso', () =>{
        cy.visit('/')
        header.acessarMenuCadastro();
        
        cadastro.iniciarCadastro(`pgats_${Date.now()}@test.com`)
        cadastro.preencherCadastro()
        cadastro.verificarCadastroEfetuadoSucesso()
    })

    it('Efetuar Login de Usuário com email e senha corretos', () => {
        cy.visit('/login')

        login.realizarLogin(usuarios.usuarioCorreto.email, usuarios.usuarioCorreto.senha)
        login.verificarSeLoginFoiEfetuadoComSucesso()
    })

    it('Efetuar Login de Usuário email e senha INCORRETOS', () => {
        cy.visit('/login')

        login.realizarLogin(usuarios.usuarioIncorreto.email, usuarios.usuarioIncorreto.senha)
        login.verificarLoginComDadosInvalidos()

     })

    it('Efetuar Logout', () => {
        cy.visit('/login')

        login.realizarLogin(usuarios.usuarioCorreto.email, usuarios.usuarioCorreto.senha)

        login.realizarLogout()

    })

    it('Tentar cadastrar usuário com e-mail já cadastrado', () => {
        cy.visit('/')
        header.acessarMenuCadastro();

        cadastro.iniciarCadastro(usuarios.usuarioCorreto.email)

        cadastro.verificarQueUsuarioJaFoiCadastrado()

    })

    it.only('Verificar todos os produtos e a página de detalhe do produto', () =>{
        cy.visit('/')
        header.acessarMenuProdutos()

        produtos.verificarTituloTodosProdutos()
        produtos.clicarNoDetalheDoPrimeiroProdutoListado()
        
        detalheProduto.verificarProdutoApresentado('Blue Top', 
                                                   'Women > Tops',
                                                   '500',
                                                   'In Stock',
                                                   'New',
                                                   'Polo')
    })
    
})

