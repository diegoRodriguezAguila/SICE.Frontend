export class SiceFrontendPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('sice-frontend-app h1')).getText();
  }
}
