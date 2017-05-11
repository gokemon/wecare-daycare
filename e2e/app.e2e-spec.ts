import { WecareDaycarePage } from './app.po';

describe('wecare-daycare App', () => {
  let page: WecareDaycarePage;

  beforeEach(() => {
    page = new WecareDaycarePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
