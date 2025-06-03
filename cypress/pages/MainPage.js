class MainPage {
    constructor() {
        this.mainPage = 'https://monoxatoys.com';
        this.greeting = 'p.lead'; //I'm Roxanne
        this.upperGuru = 'strong.uppercase'; //Upper left banner (There are more than one selector with this name, use contain.text in test)
        this.upperGuruText = 'Amigurumi guru from Estonia'; //Text in upper left banner
        this.faceBookIcon = 'a.facebook'; // a. - shows the link with class facebook
        this.instagramIcon = 'a.instagram';
        this.emailIcon = 'a.email';
    }

    // This is opens the main page
    openMainPage() {
        cy.visit(this.mainPage);
    }

    //This is to check that left upper banner is visible and there is a text inside
    upperGuruIsVisible() {
        cy.get(this.upperGuru)
        .should('be.visible').
        should('contain.text', this.upperGuruText);
       }
       //This is to check that FB icon is visible and correct link inside
       facebookIconIsVisible () {
        cy.get(this.faceBookIcon).should('be.visible')
       }
       facebookLinkCorrect() {
        cy.get(this.faceBookIcon).should('have.attr', 'href').and('include', 'https://www.facebook.com/monoxatoys/')
       };

       //This is to check that Insta icon is visible and correct link inside
       instagramIconIsVisible() {
        cy.get(this.instagramIcon).should('be.visible')
       }
       instagramLinksIsCorrect() {
        cy.get(this.instagramIcon).should('have.attr', 'href').and('include', 'https://www.instagram.com/monoxatoys/')
       }

       //This is to check that email icon is visible and correct adress inside
       emailIconIsVisible() {
        cy.get(this.emailIcon).should('be.visible')
       }
       emailLinkIsCorrect() {
        cy.get(this.emailIcon).should('have.attr', 'href').and('include', 'mailto:info@monoxatoys.com')
       }

    greetingShouldBeVisible() {
        cy.get(this.greeting)
  .should('be.visible').and('contain.text', 'Roxanne – Amigurumi guru from Estonia');
    }
}

export default new MainPage()