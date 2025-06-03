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

it('Main page is opened and greeting is visible', () => {
MainPage.greetingShouldBeVisible();
});


});







