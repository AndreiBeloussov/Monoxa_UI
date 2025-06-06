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

it.only('Banners functionality', () => {
  MainPage.bannersFunctionality();
})


});







