class PurchaseProcess {
    constructor () {
this.addToCart = '.add-to-cart-button';
this.popUpCart = '.woocommerce-mini-cart-item';
this.itemsInCart = '.cart-icon > strong'
this.removeFromCart = '.remove_from_cart_button'; 












}

addToCartCheck() {
    //Check that cart is empty before we add anything there
     cy.get(this.itemsInCart)
     .invoke('text')
     .then((initialText) => {
        const initialCount = parseInt(initialText.trim()); //parseInt - converts text to number
        expect(initialCount).to.eq(0);
    //Add one item to card
    cy.get(this.addToCart).eq(2).click();
    cy.get(this.popUpCart).should('be.visible') // Once item is added to cart, pop-up is visible
    //Check that now number if items in cart changed from 0 to 1
    cy.get(this.itemsInCart)
    .invoke('text') 
    .then((updatedText) =>{
        const updatedCount = parseInt(updatedText.trim());
        expect(updatedCount).to.be.greaterThan(initialCount);
})
    })
};




}
export default new PurchaseProcess()