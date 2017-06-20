import { DesafioFrontEndInfograficosPage } from './app.po';

describe('desafio-front-end-infograficos App', () => {
  let page: DesafioFrontEndInfograficosPage;

  beforeEach(() => {
    page = new DesafioFrontEndInfograficosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
