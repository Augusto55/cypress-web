/// <reference types="cypress" />

import SauceLogin from '../pages/sauce_login.page'

describe('Testes de login saucedemo', () => {

    describe('Teste de login positivo', () => {
    before(() => {
        SauceLogin.acessarSauceDemo()
    })

    it('Deve inserir os dados de login padrão e clicar para logar', () => {
        SauceLogin.logar()
        })

    
    it('Deve validar os elementos da página após o login', () => {
        cy.visit('/')
        SauceLogin.logar()
        SauceLogin.validarLogin()
        }) 
    })

      
    })
            
        
   
describe('Testes de login negativo', () => {
    before(() => {
        SauceLogin.acessarSauceDemo()
    })

    it('Deve inserir os dados de login de um usuário bloqueado, clicar para logar e receber a mensagem de que o usuário está bloqueado', () => {
        SauceLogin.logar('locked_out_user')
        SauceLogin.validarBloqueado()
             
})


    it('Deve inserir os dados de login de um usuário com email inválido e tentar logar', () => {
        SauceLogin.logar('  ')
        SauceLogin.usuarioInvalido()
    })      

})




