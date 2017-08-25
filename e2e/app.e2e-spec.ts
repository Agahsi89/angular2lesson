import { Angular2lessonPage } from './app.po';

describe('angular2lesson App', () => {
  let page: Angular2lessonPage;

  beforeEach(() => {
    page = new Angular2lessonPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
