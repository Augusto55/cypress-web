import Base from './_base.page';

import loginCredentials from '../fixtures/loginCredentials'

import {LOGIN as LG} from './components/sauce.elements'

import {LOGINVALIDATION as LV} from './components/sauce.elements'

const ERROR_CONTAINER = ".error-message-container"
const ERROR_TEXT = "[data-test='error'"


export default class SauceLogin extends Base {

    static acessarSauceDemo(){
        cy.visit(`${Cypress.env('baseUrl')}`)
    }

    static logar(usuario = 'standard_user') {
        super.typeValue(LG.INP_USER, usuario)
        super.typeValue(LG.INP_PASSWORD, loginCredentials.password)
        super.clickOnElement(LG.BTN_LOGIN)
    }

    static validarLogin() {
        super.validarUrl('/inventory.html')
        super.getElement(LV.INV_CONTAINER)
        super.getElement(LV.ITEM_NAME)
        super.getElement(LV.ITEM_PRICE)
        super.getElement(LV.ITEM_IMG)
        super.getElement(LV.BTN_ADDCART)
    }

    static validarBloqueado() {
        super.getElement(ERROR_CONTAINER)
        super.validateElementText(ERROR_TEXT, 'Epic sadface: Sorry, this user has been locked out.')
    }

    static usuarioInvalido() {
        super.getElement(ERROR_CONTAINER)
        super.validateElementText(ERROR_TEXT, 'Epic sadface: Username and password do not match any user in this service')
    }
}