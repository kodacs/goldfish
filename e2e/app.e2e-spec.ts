import { GoldfishPage } from './app.po';

describe('goldfish App', function() {
  let page: GoldfishPage;

  beforeEach(() => {
    page = new GoldfishPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
