import PurchaseProcess from "../pages/PurchaseProcess";
import MainPage from "../pages/MainPage";

describe('Test for purchase process', () => {

it('Add to cart check', () => {
    MainPage.openMainPage()
    PurchaseProcess.addToCartCheck()
});

it('Product added to cart, cart is opened', () => {
    MainPage.openMainPage()
    PurchaseProcess.viewCartTest()
});

it('Product in cart is the same as selected', () => {
    MainPage.openMainPage()
    let productIndexes = [0, 1, 2];
    productIndexes.forEach((productIndex) => {
    PurchaseProcess.correctProductInCart(productIndex)
    }) 
});

it.only('Update cart, add one more product check that correct price shown', () => {
    MainPage.openMainPage()
    PurchaseProcess.updateCart(1)
});

it('Remove product from cart, correct message', () => {
    
});




});