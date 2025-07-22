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
    this.homeLink = 'a.nav-top-link[href="https://monoxatoys.com/"]';
    this.tutorialsLink = 'a.nav-top-link[href="https://monoxatoys.com/product-category/tutorials/"]';
    this.dollsLink = 'a.nav-top-link[href="https://monoxatoys.com/product-category/exclusive-dolls/"]';
    this.aboutLink = 'a.nav-top-link[href="https://monoxatoys.com/about/"]';
    this.contactLinks = 'a.nav-top-link[href="https://monoxatoys.com/contact/"]';
    this.searcIcon = 'i.icon-search';
    this.greetingsPhoto = 'div.img.has-hover.x50.y10';
    this.greeting1 = 'h3.alt-font'; //Hey Sweetie
    this.greeting2 = 'h4.uppercase'; // I am so glad to see you! Come on in ...
    this.knowMeBetter = 'a.button.secondary'; //Know me better button
    this.tutorialsBanner = 'a.uppercase[href="https://monoxatoys.com/product-category/tutorials/"]';
    this.dollsBanner = 'a.uppercase[href="https://monoxatoys.com/product-category/exclusive-dolls/"]';
    this.aboutBanner = 'a.uppercase[href="https://monoxatoys.com/elements/pages/about"]';
    this.bestSellingItems = '.row-slider .product-small.col';
    this.bannerComment = '.testimonial-text > p'; // banner with comments and stars ;
    this.latestProductsList = '#woocommerce_products-12 .product_list_widget > li'; //Latest products
    this.productsPrice = '.woocommerce-Price-amount'; //Products price
    this.productsName = '.product-title'; // Products name 
    this.bestSellingProducts = '#woocommerce_products-11 .product_list_widget > li'; //Best Selling products
    this.topRatedProducts = '#woocommerce_top_rated_products-3 .product_list_widget > li'; // Top rated products
    this.bottomNavigation = '#nav_menu-5 .widget-title'; //Bottom navigation
    this.bottomHome = '#menu-main-menu-1 .menu-item-home a'; // Bottom home
    this.bottomTutorials = '#menu-main-menu-1 .menu-item-697 a'; //Bottom tutorials
    this.bottomDolls = '#menu-main-menu-1 .menu-item-698 a'; // Bottom Exclusive dolls
    this.bottomAbout = '#menu-main-menu-1 .menu-item-559 a'; // Bottom About
    this.bottomContact = '#menu-main-menu-1 .menu-item-560 a'; // Bottom Contact
    this.aboutTheShop = '#nav_menu-8 .widget-title'; //About the shop
    this.makingPurchase = '#menu-secondary .menu-item-686 a'; //Making a purchase
    this.termsConditions = '#menu-secondary .menu-item-687 a'; //Terms and Conditions
    this.privacyPolicy = '#menu-secondary .menu-item-684 a'; //Privacy Policy
    this.cookies = '#menu-secondary .menu-item-685 a'; // Cookies



  }

  // This is opens the main page
  openMainPage() {
    cy.visit(this.mainPage);
  };

  //This is to check that left upper banner is visible and there is a text inside
  upperGuruIsVisible() {
    cy.get(this.upperGuru)
      .should('be.visible').
      should('contain.text', this.upperGuruText);
  };
  //This is to check that FB icon is visible and correct link inside
  facebookIconIsVisible() {
    cy.get(this.faceBookIcon).should('be.visible')
  };
  facebookLinkCorrect() {
    cy.get(this.faceBookIcon).should('have.attr', 'href').and('include', 'https://www.facebook.com/monoxatoys/')
  };

  //This is to check that Insta icon is visible and correct link inside
  instagramIconIsVisible() {
    cy.get(this.instagramIcon).should('be.visible')
  };
  instagramLinksIsCorrect() {
    cy.get(this.instagramIcon).should('have.attr', 'href').and('include', 'https://www.instagram.com/monoxatoys/')
  };

  //This is to check that email icon is visible and correct adress inside
  emailIconIsVisible() {
    cy.get(this.emailIcon).should('be.visible')
  };
  emailLinkIsCorrect() {
    cy.get(this.emailIcon).should('have.attr', 'href').and('include', 'mailto:info@monoxatoys.com')
  };

  //This is to check that Logo on main page is visible
  logoIsVisible() {
    cy.get(this.monoxaLogo).should('be.visible')
  };

  //This is to check Navigation bar is visible
  navigationBarisVisible() {
    cy.get(this.headerNavigationBar).should('be.visible')
  };
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
  };

  // Greetings photo is loaded
  greetingsPhotoIsVisible() {
    cy.get(this.greetingsPhoto).should('be.visible')
  };
  // Greetings text is visible    
  greetingShouldBeVisible() {
    cy.get(this.greeting1, { timeout: 10000 }).should('be.visible').and('contain.text', 'Hey sweetie');
    cy.get(this.greeting2).should('be.visible').and('contain.text', 'I am so glad to see you');
    cy.get(this.greeting3).should('be.visible').and('contain.text', 'Roxanne – Amigurumi guru from Estonia');
  };

  // Know me better button is visible and forwards to About page

  knowMeBetterRedirects() {
    cy.get(this.knowMeBetter).click(); //Find and click on button
    cy.url().should('include', 'https://monoxatoys.com/about/'); // link is correct
    cy.get('h1.lead').should('contain', 'About') //About text is visible
  };

  //Banners functionality
  bannersFunctionality() {
    //Tutorials banner
    cy.get(this.tutorialsBanner).click();
    cy.url().should('include', 'https://monoxatoys.com/product-category/tutorials/');
    cy.go('back');
    cy.url().should('eq', this.mainPage);
    //Exclusive dolls banner
    cy.get(this.dollsBanner).click();
    cy.url().should('include', 'https://monoxatoys.com/product-category/exclusive-dolls/');
    cy.go('back');
    cy.url().should('eq', this.mainPage);
    //About banner
    cy.get(this.aboutBanner).click();
    cy.url().should('include', 'https://monoxatoys.com/about/');
    cy.go('back');
    cy.url().should('eq', this.mainPage);
  };

  //At least 1 best selling item is shown
  bestSellingIsVisible() {
    cy.get(this.bestSellingItems, { timeout: 10000 }).should('exist')
      .and('have.length.at.least', 1);
  };

  //At least one comment is shown
  starCommentisVisible() {
    cy.get(this.bannerComment) //find banner
      .should('be.visible')
      //Put element to variable $el
      .and(($el) => {
        expect($el.text().trim()).to.not.be.empty; //$el.text - aquire text inside, .trim - deletes spaces
      });
  }

  //Latest products are visible, have an image, name and price
  latestProductList() {
    //List is visible and have at least 1 element
    cy.get(this.latestProductsList).should('exist')
      .and('have.length.greaterThan', 0);
    // There is a content  
    cy.get(this.latestProductsList).each(($el) => {  //get all products in the list, "each" checks all elements 
      // Photo of a product
      cy.wrap($el).find('img') //wrap - wraps it into cypress functions, that .should/.and/.expect commands worked
        .should('be.visible')
        .and(($img) => {
          expect($img.attr('src')).to.match(/^https:\/\/monoxatoys\.com\/.*\.(jpg|jpeg|png|gif|webp)$/i);
        });
      // Product name
      cy.wrap($el).find(this.productsName)
        .should('be.visible')
        .and(($title) => {
          expect($title.text().trim()).to.not.be.empty;
        });
      //Product price
      cy.wrap($el).find(this.productsPrice)
        .should('be.visible')
        .and(($price) => {
          expect($price.text().trim()).to.match(/\d/); // has a numbers
        });
    })
};

//Best selling products list is visible, has an images and prices
bestSellingProductsList() {
    //List is visible and have at least 1 element
    cy.get(this.bestSellingProducts).should('exist')
      .and('have.length.greaterThan', 0);
    // There is a content  
    cy.get(this.bestSellingProducts).each(($el) => {
      // Photo of a product
      cy.wrap($el).find('img')
        .should('be.visible')
        .and(($img) => {
          expect($img.attr('src')).to.match(/^https:\/\/monoxatoys\.com\/.*\.(jpg|jpeg|png|gif|webp)$/i);
        });
      // Product name
      cy.wrap($el).find(this.productsName)
        .should('be.visible')
        .and(($title) => {
          expect($title.text().trim()).to.not.be.empty;
        });
      //Product price
      cy.wrap($el).find(this.productsPrice)
        .should('be.visible')
        .and(($price) => {
          expect($price.text().trim()).to.match(/\d/); // has a numbers
        });
    })
};

//Top rated products list is visible, has an images and prices
topRatedProductsList() {
    //List is visible and have at least 1 element
    cy.get(this.topRatedProducts).should('exist')
      .and('have.length.greaterThan', 0);
    // There is a content  
    cy.get(this.topRatedProducts).each(($el) => {
      // Photo of a product
      cy.wrap($el).find('img')
        .should('be.visible')
        .and(($img) => {
          expect($img.attr('src')).to.match(/^https:\/\/monoxatoys\.com\/.*\.(jpg|jpeg|png|gif|webp)$/i);
        });
      // Product name
      cy.wrap($el).find(this.productsName)
        .should('be.visible')
        .and(($title) => {
          expect($title.text().trim()).to.not.be.empty;
        });
      //Product price
      cy.wrap($el).find(this.productsPrice)
        .should('be.visible')
        .and(($price) => {
          expect($price.text().trim()).to.match(/\d/); // has a numbers
        });
    })
};

  //Navigation at the bottom tests

  //Navigation is visible
  bottomNavigationVisible() {
    cy.get(this.bottomNavigation).should('be.visible')
      .and('contain.text', 'Navigation')
  };
  //Home is visible link is correct, and working
  bottomHomeFunctionality() {
    cy.get(this.bottomHome).should('be.visible').and('contain', 'Home') //Visible and correct name
      .and('have.attr', 'href', 'https://monoxatoys.com/'); //Correct link inside
    //Link is working
    cy.get(this.bottomHome).click()
    cy.url().should('include', 'https://monoxatoys.com');
  };
  // Tutorials
  bottomTutorialsFunctionality() {
    cy.get(this.bottomTutorials).should('be.visible') // Visible
      .and('contain', 'Tutorials') // Name is correct
      .and('have.attr', 'href', 'https://monoxatoys.com/product-category/tutorials/') //Link is correct

    //Link is working
    cy.get(this.bottomTutorials).click()
    cy.url().should('include', 'https://monoxatoys.com/product-category/tutorials/')
  };
    //Exclusive dolls
  bottomDollsFunctionality() {
    cy.get(this.bottomDolls).should('be.visible') // Visible
      .and('contain', 'Exclusive dolls') // Name is correct
      .and('have.attr', 'href', 'https://monoxatoys.com/product-category/exclusive-dolls/') //Link is correct

    //Link is working
    cy.get(this.bottomDolls).click()
    cy.url().should('include', 'https://monoxatoys.com/product-category/exclusive-dolls/')
  };

    //About
    bottomAboutFunctionality() {
      cy.get(this.bottomAbout).should('be.visible') // Visible
      .and('contain', 'About') // Name is correct
      .and('have.attr', 'href', 'https://monoxatoys.com/about/') //Link is correct

    //Link is working
    cy.get(this.bottomAbout).click()
    cy.url().should('include', 'https://monoxatoys.com/about/')
    };

    //Contact
    bottomContactFunctionality() {
      cy.get(this.bottomContact).should('be.visible') // Visible
      .and('contain', 'Contact') // Name is correct
      .and('have.attr', 'href', 'https://monoxatoys.com/contact/') //Link is correct

    //Link is working
    cy.get(this.bottomContact).click()
    cy.url().should('include', 'https://monoxatoys.com/contact/')
    };

    //About the shop
    aboutTheShopVisible() {
      cy.get(this.aboutTheShop).should('be.visible')
      .and('contain.text', 'About the shop')
    };

    // Making a purchase
   makingPurchaseFunctionality() {
      cy.get(this.makingPurchase).should('be.visible') // Visible
      .and('contain', 'Making a purchase') // Name is correct
      .and('have.attr', 'href', 'https://monoxatoys.com/making-a-purchase/') //Link is correct

    //Link is working
    cy.get(this.makingPurchase).click()
    cy.url().should('include', 'https://monoxatoys.com/making-a-purchase/')
    }; 

    // Terms and Conditions
    termsConditionsFunctionality() {
      cy.get(this.termsConditions).should('be.visible') // Visible
      .and('contain', 'Terms and Conditions') // Name is correct
      .and('have.attr', 'href', 'https://monoxatoys.com/terms-and-conditions/') //Link is correct

    //Link is working
    cy.get(this.termsConditions).click()
    cy.url().should('include', 'https://monoxatoys.com/terms-and-conditions/')
    }; 
    // Privacy Policy
   privacyPolicyFunctionality() {
      cy.get(this.privacyPolicy).should('be.visible') // Visible
      .and('contain', 'Privacy Policy') // Name is correct
      .and('have.attr', 'href', 'https://monoxatoys.com/privacy-policy/') //Link is correct

    //Link is working
    cy.get(this.privacyPolicy).click()
    cy.url().should('include', 'https://monoxatoys.com/privacy-policy/')
    };  

    // Cookies
    cookiesFunctionality() {
      cy.get(this.cookies).should('be.visible') // Visible
      .and('contain', 'Cookies') // Name is correct
      .and('have.attr', 'href', 'https://monoxatoys.com/cookies/') //Link is correct

    //Link is working
    cy.get(this.cookies).click()
    cy.url().should('include', 'https://monoxatoys.com/cookies/')
    }; 











}

export default new MainPage()