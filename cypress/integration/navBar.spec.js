/// <reference types="cypress" />

describe('teste', () => {
    before(() => {
        cy.visit('/')
    })

    it('Deve ascessar área sobre mim e clicar no botao', () => {
        expect.res.status.to.equal(200)
})

})
