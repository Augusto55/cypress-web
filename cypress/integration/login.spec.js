/// <reference types="cypress" />


describe('Testes de login saucedemo', () => {

    describe('Teste de login positivo', () => {
    before(() => {
        cy.visit('/')
    })

    it('Deve inserir os dados de login padrão e clicar para logar', () => {
        cy.fixture('loginCredentials').then(user => {
        cy.get('#user-name').type(user.valido.username)
        cy.get('#password').type(user.valido.password)
        cy.get('#login-button').click()
        })
    })

    it('Deve validar os elementos da página após o login', () => {
        cy.visit('/')
        cy.fixture('loginCredentials').then(user => {
        cy.get('#user-name').type(user.valido.username)
        cy.get('#password').type(user.valido.password)
        cy.get('#login-button').click()
        cy.url().should('contain', '/inventory.html')
        cy.get('#inventory_container')
        //checar se cada div possui imagem, preço, descrição e botão para adicionar no carrinho
        cy.get(".inventory_item_name")
        cy.get(".inventory_item_price")
        cy.get(".btn")
        cy.get(".inventory_item_img")
        })   
        })
    })        
        
    })



describe('Testes de login negativo', () => {
    before(() => {
        cy.visit('/')
    })

    it('Deve inserir os dados de login de um usuário bloqueado, clicar para logar e receber a mensagem de que o usuário está bloqueado', () => {
        cy.fixture('loginCredentials').then(user => {
        cy.get('#user-name').type(user.usuarioBloqueado.username)
        cy.get('#password').type(user.usuarioBloqueado.password)
        cy.get('#login-button').click()
        cy.get('.error-message-container')
        cy.get("[data-test='error'").should('contain', 'Epic sadface: Sorry, this user has been locked out.')
        })      
})


    it('Deve inserir os dados de login de um usuário com email inválido e tentar logar', () => {
        cy.fixture('loginCredentials').then(user => {
        cy.get('#user-name').type(user.usuarioSemEmail.username)
        cy.get('#password').type(user.usuarioSemEmail.password)
        cy.get('#login-button').click()
        cy.get('.error-message-container')
        cy.get("[data-test='error'").should('contain', 'Epic sadface: Username and password do not match any user in this service')
    })      
})
})




