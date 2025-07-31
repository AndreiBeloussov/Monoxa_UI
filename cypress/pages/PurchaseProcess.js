import { faker } from '@faker-js/faker';

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
this.cartUpdatedMessage = '.message-container';
this.checkoutInCart = '.wc-proceed-to-checkout';
//Billing information
this.firstName = '#billing_first_name'
this.lastName = '#billing_last_name'
this.companyName = '#billing_company'
this.countryRegion = '#billing_country'
this.streetAddress = '#billing_address_1' 
this.streetAddress2 = '#billing_address_2'
this.postcode = '#billing_postcode'
this.townCity = '#billing_city'
this.phoneNumber = '#billing_phone'
this.emailAddress = '#billing_email'









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
    //Check that now number of items in cart changed from 0 to 1
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
};

  emptyCartCheck(productIndex) {
    cy.clickAddToCart(productIndex) //add product
    cy.openCart() //open cart
    cy.get(this.minusButton).click() //remove product
    cy.get(this.updateCartButton).click() //update cart
    cy.wait(1000)
    // Cart updated message
    cy.get(this.cartUpdatedMessage).should('contain.text', 'Cart updated')
    .should('contain.text', 'Your cart is currently empty')
    // Price in cart is 0 
    cy.get(this.firstSubtotal).invoke('text').then(priceText => {
      const clean = text => parseFloat(text.trim().replace(/[^\d,]/g, '').replace(',', '.'));
      const newPrice = clean(priceText);
      expect(newPrice).to.equal(0);
    })
    // Products in cart is 0
    cy.get(this.itemsInCart)
    .invoke('text') 
    .then((updatedText) =>{
        const updatedCount = parseInt(updatedText.trim());
        expect(updatedCount).to.equal(0);
});
};

proceedCheckoutFromCart(productIndex){
    cy.clickAddToCart(productIndex) //add product
    cy.openCart() //open cart
    cy.get(this.checkoutInCart).click() //Proceed to checkout
    //correct URL is opened
    cy.url().should('include', 'https://monoxatoys.com/checkout/');
};

proceedCheckoutFromHome(productIndex) {
  cy.clickAddToCart(productIndex)
  cy.get(this.viewCart).eq(1) //there are more than one element with this name, select the first one
    .invoke('show')
    .click()
    //Forwarded to correct page
    cy.url().should('include', 'https://monoxatoys.com/checkout/');

};

fillBillingDetails() {
  cy.get(this.firstName).type(faker.person.firstName());
    cy.get(this.lastName).type(faker.person.lastName());
    cy.get(this.companyName).type(faker.company.name());
    // cy.get(this.countryRegion).select('Estonia'); // можно заменить на faker.location.country() + кастомный маппинг
    cy.get(this.streetAddress).type(faker.location.streetAddress());
    cy.get(this.streetAddress2).type(faker.location.secondaryAddress());
    cy.get(this.townCity).type(faker.location.city());
    cy.get(this.postcode).type(faker.location.zipCode());
    cy.get(this.phoneNumber).type(faker.phone.number());
    cy.get(this.emailAddress).type(faker.internet.email());

}


}
export default new PurchaseProcess()