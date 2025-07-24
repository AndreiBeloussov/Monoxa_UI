import PurchaseProcess from "../pages/PurchaseProcess";
import MainPage from "../pages/MainPage";

describe('Test for purchase process', () => {

it('Add to cart check', () => {
    MainPage.openMainPage()
    PurchaseProcess.addToCartCheck()
});

it.only('Product added to cart, cart is opened', () => {
    MainPage.openMainPage()
    PurchaseProcess.viewCartTest()
});



});