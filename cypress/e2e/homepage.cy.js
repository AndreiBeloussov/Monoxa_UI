import MainPage from "../pages/MainPage";

describe('Main page functionality', () => {
//Tests for Main page elements


// Before each test open the website
beforeEach(() => {

  MainPage.openMainPage();

});

it('Main page is opened, upper bar is visible with correct text inside', () => {
  MainPage.upperGuruIsVisible();
});

it('Facebook icon is visible and link is correct', () => {
  MainPage.facebookIconIsVisible();
  MainPage.facebookLinkCorrect();
});

it('Instagram icon is visible and link is correct', () => {
 MainPage.instagramIconIsVisible();
 MainPage.instagramLinksIsCorrect();
});

it('Email icon is visible and link is correct', () => {
  MainPage.emailIconIsVisible();
  MainPage.emailLinkIsCorrect();
});

it('Logo on the main page is visible', () => {
  MainPage.logoIsVisible();
})

it('Navigation bar is visible and links are correct', () => {
  MainPage.navigationBarisVisible();
  MainPage.navigationBarLinksAreCorrect();
})

it('Search icon is visible', () => {
MainPage.searchIconIsVisible();
});

it('Greetings photo', () => {
  MainPage.greetingsPhotoIsVisible()
})

it('Greeting is visible', () => {
MainPage.greetingShouldBeVisible();
});

it('Know me better functionality', () => {
  MainPage.knowMeBetterRedirects();
});

//Check that all three banners Tutorial/Exclusive dolls/About are functional
it('Banners functionality', () => {
  MainPage.bannersFunctionality();
});

it('Best selling products', () => {
  MainPage.bestSellingIsVisible();
});

it('Star and Comments are visible', () => {
  MainPage.starCommentisVisible();
});

it('Latest list with products', () => {
  MainPage.latestProductList();
});

it('Best selling list with products', () => {
  MainPage.bestSellingProductsList();
})

it('Top rated list with products', () => {
  MainPage.topRatedProductsList();
});

it('Bottom navigation test', () => {
  MainPage.bottomNavigationVisible();
});

it('Bottom Home functionality', () => {
  MainPage.bottomHomeFunctionality();
});

it('Bottom Tutorials functionality', () => {
  MainPage.bottomTutorialsFunctionality();
});

it('Bottom Exclusive dolls functionality', () => {
  MainPage.bottomDollsFunctionality();
});

it('Bottom About functionality', () => {
  MainPage.bottomAboutFunctionality();
});

it('Bottom Contact functionality', () => {
  MainPage.bottomContactFunctionality();
});

it('About the Shop visibility', () => {
  MainPage.aboutTheShopVisible()
});

it('Making a purchase functionality', () => {
  MainPage.makingPurchaseFunctionality()
});

it('Terms and Conditions functionality', () => {
  MainPage.termsConditionsFunctionality()
});

it('Privacy Policy functionality', () => {
  MainPage.privacyPolicyFunctionality()
});

it('Cookies functionality', () => {
  MainPage.cookiesFunctionality()
});

it('Contacts visibility', () => {
  MainPage.contactsFunctionality()
});

it('Contact information is correct', () => {
  MainPage.bottomContactInfoCorrect()
});

it('Bottom screen Email link is correct', () => {
  MainPage.bottomEmailLinkFunctionality()
});

it('Bottom screen Facebook link is correct', () => {
  MainPage.bottomFacebookIconFunctionality()
});

it('Bottom screen Instagram link is correct', () => {
  MainPage.bottomInstaIconFunctionality()
});












});







