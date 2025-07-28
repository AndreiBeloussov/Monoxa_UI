class PurchaseProcess {
    constructor () {
this.addToCart = '.add-to-cart-button';
this.popUpCart = '.woocommerce-mini-cart-item';
this.itemsInCart = '.cart-icon > strong'
this.removeFromCart = '.remove_from_cart_button'; 
this.viewCart = '.button.wc-forward';
this.checkout = '.button.checkout.wc-forward';
this.productLink = 'a.woocommerce-LoopProduct-link';
this.productInCart = 'li.woocommerce-mini-cart-item a';
this.plusButton = 'input[value="+"]'; 
this.minusButton = 'input[value="-"]';
this.updateCartButton = 'button[name="update_cart"]';
this.firstSubtotal = '.cart-price .woocommerce-Price-amount';
this.secondSubtotal = 'td.product-subtotal .woocommerce-Price-amount';
this.thirdSubtotal = 'td[data-title="Subtotal"]:not(.product-subtotal) .woocommerce-Price-amount';











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

correctProductInCart (productIndex) {
    cy.clickAddToCart(productIndex) //add a product
    //Save a href of this product from main page
    cy.get(this.productLink).eq(productIndex)
    .invoke('attr', 'href')
    .as('selectedHref') //assign an alias to href of a product
    //Get href from product in cart
    cy.get(this.productInCart)
    .eq(1) //second element, it has correct href of the product
    .invoke('attr', 'href') //get a href of this element
    //assign a variable for this href cartHref
    .then((cartHref) => {
        //get an alias of product href and assign a variable to it for comaprison
        cy.get('@selectedHref').then((selectedHref) => {
        expect(cartHref).to.equal(selectedHref)
       
     //Delete product from cart
    cy.get(this.removeFromCart).eq(0).invoke('show').click();
    cy.get(this.productInCart).should('not.exist')
    })
})
};

updateCart(productIndex) {
    cy.clickAddToCart(productIndex) //add product
    cy.openCart() //open cart

    //Check that all subtotals are the same
    cy.compareSubotals().then(() => {
    //Add one more product 
    cy.get(this.plusButton).click();
    //Update cart
    cy.get(this.updateCartButton).click()
    cy.wait(1000)
    //Compare new subtotals
    cy.get(this.firstSubtotal).invoke('text').then(newPrice1 => {
      cy.get(this.secondSubtotal).invoke('text').then(newPrice2 => {
        cy.get(this.thirdSubtotal).invoke('text').then(newPrice3 => {
            // Parse text into numbers, trim deletes space start/end of the line, replace (deletes everything except numbers), replace ("," to ".")
          const clean = text => parseFloat(text.trim().replace(/[^\d,]/g, '').replace(',', '.'));
          const newPrices = [clean(newPrice1), clean(newPrice2), clean(newPrice3)];

          const initial = Cypress.env('initialSubtotal');
            // Check that new price is x2 to the initial price
          expect(newPrices.every(price => price === initial * 2)).to.be.true;
          expect(newPrices.every(price => price === newPrices[0])).to.be.true;
        });
      });
    });
  });
}






}
export default new PurchaseProcess()