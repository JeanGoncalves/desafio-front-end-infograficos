import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  private _news;
  public listNews = [];
  public editoria = "Esporte";
  public imageUrl = "https://raw.githubusercontent.com/JeanGoncalves/desafio-front-end-infograficos/master/Arquivos/Imagens/Notícias/";
  public listEditory = ['teste','teste 2','teste 3','teste 4'];

  @Input()
  set news (news: Array<any>) {
    this._news = news;
    this.onInitNews();
  }
  get news (): Array<any> {
    return this._news;
  }
  
  constructor() { }

  ngOnInit() {
  }

  onInitNews() {
    if (this.news.length > 0) {
      this.listNews = this.news[0].Notícias;
      this.listEditory = this.news.map((_new) => _new.Editoria);
    }
  }

  findEditoryContent (editory?) {
    this.listNews = [];
    this.news.forEach((_new) => {
      if (!editory || editory == _new.Editoria) {
        this.listNews.push(_new.Notícias);
      }
    })
  }

  orderList (orderBy) {
    
  }
}
