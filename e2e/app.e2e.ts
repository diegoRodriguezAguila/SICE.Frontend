import { SiceFrontendPage } from './app.po';

describe('sice-frontend App', function() {
  let page: SiceFrontendPage;

  beforeEach(() => {
    page = new SiceFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('sice-frontend works!');
  });
});
