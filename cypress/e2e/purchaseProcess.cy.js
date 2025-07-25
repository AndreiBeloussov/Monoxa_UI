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





});