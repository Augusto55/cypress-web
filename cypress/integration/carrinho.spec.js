/// <reference types="cypress" />

import SauceLogin from '../pages/sauce_login.page'
// import LoginSpec from '/login.spec.js'

describe('Testes com o carrinho saucedemo', () => {
    describe('Teste de compra positivo', () => {
        before(() => {
            SauceLogin.acessarSauceDemo()
            SauceLogin.logar()
            SauceLogin.validarLogin()
        })
        it('Deve adicionar um produto ao carrinho e concluir a compra', () => {
            SauceLogin.comprarProdutoNoCarrinho()
        })




    })
})