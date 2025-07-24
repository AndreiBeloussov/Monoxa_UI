class PurchaseProcess {
    constructor () {
this.addToCart = '.add-to-cart-button';
this.popUpCart = '.woocommerce-mini-cart-item';
this.itemsInCart = '.cart-icon > strong'
this.removeFromCart = '.remove_from_cart_button'; 
this.viewCart = '.button.wc-forward'
this.checkout = '.button.checkout.wc-forward'











}

addToCartCheck() {
    //Check that cart is empty before we add anything there
     cy.get(this.itemsInCart)
     .invoke('text')
     .then((initialText) => {
        const initialCount = parseInt(initialText.trim()); //parseInt - converts text to number
        expect(initialCount).to.eq(0);
    //Add one item to card
    //cy.get(this.addToCart).eq(2).click();
    cy.clickAddToCart(0) // from command.js 
    cy.get(this.popUpCart).should('be.visible') // Once item is added to cart, pop-up is visible
    //Check that now number if items in cart changed from 0 to 1
    cy.get(this.itemsInCart)
    .invoke('text') 
    .then((updatedText) =>{
        const updatedCount = parseInt(updatedText.trim());
        expect(updatedCount).to.be.greaterThan(initialCount);
    //Delete product from cart
    cy.get(this.removeFromCart).eq(0).invoke('show').click();
       
})
    })
};

//View cart and checkout test
viewCartTest() {
    cy.clickAddToCart(1) // add a product
    cy.get(this.viewCart).eq(0) //there are more than one element with this name, select the first one
    .invoke('show')
    .click()
    cy.url().should('include', 'https://monoxatoys.com/cart/') //Cart is opened
};





}
export default new PurchaseProcess()