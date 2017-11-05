import { AutomaticImageColoringPage } from './app.po';

describe('automatic-image-coloring App', () => {
  let page: AutomaticImageColoringPage;

  beforeEach(() => {
    page = new AutomaticImageColoringPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
