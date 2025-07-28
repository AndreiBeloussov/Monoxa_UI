// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


//Example how I could social media links to adapt to commands
// Cypress.Commands.add('checkBottomEmailLink', (selector) => {
//   cy.get(selector)
//     .should('be.visible')
//     .and('contain', 'info@monoxatoys.com')
//     .and('have.attr', 'href', 'mailto:info@monoxatoys.com');
// });

// Cypress.Commands.add('checkBottomFacebookIcon', (selector) => {
//   cy.get(selector)
//     .should('be.visible')
//     .and('have.attr', 'href', 'https://www.facebook.com/monoxatoys/')
//     .and('have.attr', 'target', '_blank');
// });

// Cypress.Commands.add('checkBottomInstagramIcon', (selector) => {
//   cy.get(selector)
//     .should('be.visible')
//     .and('have.attr', 'href', 'https://www.instagram.com/monoxatoys/')
//     .and('have.attr', 'target', '_blank');
// });

// And then use it in tests
// cy.checkBottomEmailLink(this.bottomEmailLink);
// cy.checkBottomFacebookIcon(this.bottomFacebookIcon);
// cy.checkBottomInstagramIcon(this.bottomInstaIcon);


//Add to cart
Cypress.Commands.add('clickAddToCart', (productIndex) => {
     cy.get('.add-to-cart-button').eq(productIndex).click();    //cy.clickAddToCart(product) product = number
});

Cypress.Commands.add('openCart', () => {
     cy.get('.button.wc-forward').eq(0) //there are more than one element with this name, select the first one
    .invoke('show')
    .click()
});

Cypress.Commands.add('compareSubotals', () => {
  cy.get('.cart-price .woocommerce-Price-amount').invoke('text').then(price1 => {
    cy.get('td.product-subtotal .woocommerce-Price-amount').invoke('text').then(price2 => {
      cy.get('td[data-title="Subtotal"]:not(.product-subtotal) .woocommerce-Price-amount').invoke('text').then(price3 => {
        const clean = t => parseFloat(t.trim().replace(/[^\d,]/g, '').replace(',', '.'));
        const prices = [clean(price1), clean(price2), clean(price3)];

        expect(prices.every(price => price === prices[0])).to.be.true; // [0] the first element with price

        // Save initial value to Env
        Cypress.env('initialSubtotal', prices[0]);
      });
    });
  });
});


