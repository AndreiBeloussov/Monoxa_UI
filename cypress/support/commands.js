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
})