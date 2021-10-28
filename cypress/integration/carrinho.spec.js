/// <reference types="cypress" />

import SauceLogin from '../pages/sauce_login.page'
import SauceCarrinho from '../pages/sauce_carrinho.page'

describe('Testes com o carrinho saucedemo', () => {
    describe('Teste de compra positivo', () => {
        before(() => {
            SauceLogin.acessarSauceDemo()
            SauceLogin.logar()
            SauceLogin.validarLogin()
        })
        it('Deve adicionar um produto ao carrinho e concluir a compra', () => {
            SauceCarrinho.adicionarAoCarrinho()
            SauceCarrinho.comprarProdutoNoCarrinho()
        })




    })

    describe('Teste de compra negativo', () => {
        before(() => {
            SauceLogin.acessarSauceDemo()
            SauceLogin.logar()
            SauceLogin.validarLogin()
        })
        it('Deve concluir uma compra sem um produto no carrinho', () => {
            SauceCarrinho.comprarSemProdutoNoCarrinho()
        })




    })
})