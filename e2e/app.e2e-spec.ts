import { VolumeTsPage } from './app.po';

describe('volume-ts App', function() {
  let page: VolumeTsPage;

  beforeEach(() => {
    page = new VolumeTsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
