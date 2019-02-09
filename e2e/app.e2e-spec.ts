import { AlgoSidePage } from './app.po';

describe('algo-side App', function() {
  let page: AlgoSidePage;

  beforeEach(() => {
    page = new AlgoSidePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
