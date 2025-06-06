class MainPage {
    constructor() {
        this.mainPage = 'https://monoxatoys.com/';
        this.greeting3 = 'p.lead'; //I'm Roxanne
        this.upperGuru = 'strong.uppercase'; //Upper left banner (There are more than one selector with this name, use contain.text in test)
        this.upperGuruText = 'Amigurumi guru from Estonia'; //Text in upper left banner
        this.faceBookIcon = 'a.facebook'; // a. - shows the link with class facebook
        this.instagramIcon = 'a.instagram';
        this.emailIcon = 'a.email';
        this.monoxaLogo = '#logo'; // # - for ID
        this.headerNavigationBar = '#masthead .flex-left ul';
        this.homeLink = 'a.nav-top-link[href="https://monoxatoys.com/"]'
        this.tutorialsLink = 'a.nav-top-link[href="https://monoxatoys.com/product-category/tutorials/"]'
        this.dollsLink = 'a.nav-top-link[href="https://monoxatoys.com/product-category/exclusive-dolls/"]'
        this.aboutLink = 'a.nav-top-link[href="https://monoxatoys.com/about/"]'
        this.contactLinks = 'a.nav-top-link[href="https://monoxatoys.com/contact/"]'
        this.searcIcon = 'i.icon-search'
        this.greetingsPhoto = 'div.img.has-hover.x50.y10'
        this.greeting1 = 'h3.alt-font' //Hey Sweetie
        this.greeting2 = 'h4.uppercase' // I am so glad to see you! Come on in ...
        this.knowMeBetter = 'a.button.secondary' //Know me better button
        this.tutorialsBanner = 'a.uppercase[href="https://monoxatoys.com/product-category/tutorials/"]'
        this.dollsBanner = 'a.uppercase[href="https://monoxatoys.com/product-category/exclusive-dolls/"]'
        this.aboutBanner = 'a.uppercase[href="https://monoxatoys.com/elements/pages/about"]'

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

       //This is to check that Logo on main page is visible
       logoIsVisible() {
        cy.get(this.monoxaLogo).should('be.visible')
       }

       //This is to check Navigation bar is visible
       navigationBarisVisible() {
        cy.get(this.headerNavigationBar).should('be.visible')
       }
       //Links inside Navigation bar are correct
       navigationBarLinksAreCorrect() {
    cy.get(this.homeLink).should('be.visible').and('contain.text', 'Home');
    cy.get(this.tutorialsLink).should('be.visible').and('contain.text', 'Tutorials');
    cy.get(this.dollsLink).should('be.visible').and('contain.text', 'Exclusive dolls');
    cy.get(this.aboutLink).should('be.visible').and('contain.text', 'About');
    cy.get(this.contactLinks).should('be.visible').and('contain.text', 'Contact');
  };

  //Search icon is visible
  searchIconIsVisible() {
    cy.get(this.searcIcon).should('be.visible')
  }

  // Greetings photo is loaded
  greetingsPhotoIsVisible() {
    cy.get(this.greetingsPhoto).should('be.visible')
  }
       
    greetingShouldBeVisible() {
        cy.get(this.greeting1).should('be.visible').and('contain.text', 'Hey sweetie');
        cy.get(this.greeting2).should('be.visible').and('contain.text', 'I am so glad to see you');
        cy.get(this.greeting3).should('be.visible').and('contain.text', 'Roxanne – Amigurumi guru from Estonia');
    }

// Know me better button is visible and forwards to About page

knowMeBetterRedirects() {
    cy.get(this.knowMeBetter).click(); //Find and click on button
    cy.url().should('include', 'https://monoxatoys.com/about/'); // link is correct
    cy.get('h1.lead').should('contain', 'About') //About text is visible
}

//Banners functionality
bannersFunctionality() {
  //Tutorials banner
  cy.get(this.tutorialsBanner).click();
  cy.url().should('include', 'https://monoxatoys.com/product-category/tutorials/');
  cy.go('back');
  cy.url().should('eq', this.mainPage );
  //Exclusive dolls banner
  cy.get(this.dollsBanner).click();
    cy.url().should('include', 'https://monoxatoys.com/product-category/exclusive-dolls/');
  cy.go('back');
  cy.url().should('eq', this.mainPage );
  //About banner
  cy.get(this.aboutBanner).click();
  cy.url().should('include', 'https://monoxatoys.com/about/');
  cy.go('back');
  cy.url().should('eq', this.mainPage );
}






}

export default new MainPage()