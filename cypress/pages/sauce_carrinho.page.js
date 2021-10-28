import Base from './_base.page';

import {LOGINVALIDATION as LV} from './components/sauce.elements'
import {COMPRA as C} from './components/sauce.elements' 

export default class SauceLogin extends Base {
    static adicionarAoCarrinho() {
        super.clickOnElement(LV.BTN_ADDCART)
    }

    static validarCarrinho() {
        super.getElement(C.CART_ITEM)
        super.getElement(C.REMOVE_BTN)
        super.getElement(C.CONTINUE_SHOPPING_BTN)
        super.getElement(C.CHECKOUT_BTN)
    }

    static validarInfoCheckout() {
        super.getElement(C.CHECKOUT_DIV)
        super.getElement(C.CHECKOUT_FNAME)
        super.getElement(C.CHECKOUT_LNAME)
        super.getElement(C.CHECKOUT_ZIP)
        super.getElement(C.CHECKOUT_CONTINUE)
        super.getElement(C.CHECKOUT_CANCEL)
    }

    static validarProdutoCheckout() {
        super.getElement(C.CHECKOUT_SUMMARY)
        super.getElement(C.CHECKOUT_FINISH)
        super.getElement(C.CHECKOUT_CANCEL)
    }

    static validarConclusaoPedido() {
        super.getElement(C.HOME_BTN)
        super.getElement(C.PONY_IMG)
        super.getElement(C.HEADER)
        super.validateElementText(C.HEADER, 'THANK YOU FOR YOUR ORDER')
    }

    static comprarProdutoNoCarrinho() {
        super.clickOnElement(C.CART_BTN)
        this.validarCarrinho()
        super.clickOnElement(C.CHECKOUT_BTN)
        this.validarInfoCheckout()
        super.clickOnElement(C.CHECKOUT_CONTINUE)
        this.validarProdutoCheckout()
        super.clickOnElement(C.CHECKOUT_FINISH)
        this.validarConclusaoPedido()
    }

}