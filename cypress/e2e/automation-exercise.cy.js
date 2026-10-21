/// <reference types="cypress" />

const homePage = require('../modules/homePage/index.js')
const cadastro = require('../modules/cadastro/index.js')
const login = require('../modules/login/index.js')
const produtos = require('../modules/produtos/index.js')
const detalheProduto = require('../modules/detalheProduto/index.js')
const carrinho = require('../modules/carrinho/index.js')
const checkout = require('../modules/checkout/index.js')
const pagamento = require('../modules/pagamento/index.js')
const pedidoConcluido = require('../modules/pedidoConcluido/index.js')

const usuarios = require('../fixtures/usuarios.json')
const cartoes = require('../fixtures/cartaoCredito.json')

describe('Automation Excercise', () =>{
    it('Cadastrar um novo usuário com sucesso', () =>{
        cy.visit('/')
        homePage.acessarMenuCadastro();
        
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
        homePage.acessarMenuCadastro();

        cadastro.iniciarCadastro(usuarios.usuarioCorreto.email)

        cadastro.verificarQueUsuarioJaFoiCadastrado()

    })

    it('Verificar todos os produtos e a página de detalhe do produto', () =>{
        cy.visit('/')
        homePage.acessarMenuProdutos()

        produtos.verificarTituloTodosProdutos()
        produtos.clicarNoDetalheDoPrimeiroProdutoListado()
        
        detalheProduto.verificarProdutoApresentado('Blue Top', 
                                                   'Women > Tops',
                                                   '500',
                                                   'In Stock',
                                                   'New',
                                                   'Polo')
    })

   it('Pesquisar produto', () => {
        const produto = 'Summer White Top'

        cy.visit('/')
        homePage.acessarMenuProdutos()

        produtos.verificarTituloTodosProdutos()
        produtos.pesquisarProduto(produto)
        produtos.verificarProdutoPesquisado(produto)
        
   })

   it('Verificar subscrição na home page', () => {
        cy.visit('/')
        homePage.rolarParaRodapePagina()
        homePage.verificarTituloSubscricao()
        homePage.informarEmailSubscricao(usuarios.usuarioCorreto.email)
        homePage.verificarMensagemDeEnvioDeSubscricaoSucesso()
   })

   it.only('Finalizar pedido: Criação de conta antes do checkout', () => {
        cy.visit('/')
        homePage.acessarMenuCadastro();
        
        cadastro.iniciarCadastro(`pgats_${Date.now()}@test.com`)
        cadastro.preencherCadastro()
        cadastro.verificarCadastroEfetuadoSucesso()

        homePage.acessarMenuProdutos()

        produtos.verificarTituloTodosProdutos()
        produtos.clicarEmAdicionarNoCarrinhoDoPrimeiroProdutoListado()
        produtos.clicarVisualizarCarrinho()

        carrinho.clicarProsseguirComCheckout()
        checkout.verificarTelaCheckout()
        checkout.clicarProsseguirParaPagamento()

        pagamento.informarDadosDoCartao(cartoes.cartaoValido.nomeNoCartao,
                                        cartoes.cartaoValido.numeroCartao,
                                        cartoes.cartaoValido.cvv,
                                        cartoes.cartaoValido.mesExpiracao,
                                        cartoes.cartaoValido.anoExpiracao
        )

        pedidoConcluido.verificarConclusaoPedido()
   })
    
})

