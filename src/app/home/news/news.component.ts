import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  private _news;
  public listNews = [];
  public orderBy = '';
  public imageUrl = "https://raw.githubusercontent.com/JeanGoncalves/desafio-front-end-infograficos/master/Arquivos/Imagens/Notícias/";

  @Input() 
  set news (news: Array<any>) {
    this._news = news;
    this.groupNews(news);
  }
  get news (): Array<any> {
    return this._news;
  }

  constructor() { }

  ngOnInit() {}

  groupNews(news, editory?) {
    this.listNews = [];
    news.forEach(_editory => _editory['Notícias'].forEach(_new => {
      _new['editoria'] = _editory.Editoria;
      if (!editory || _editory.Editoria == editory) {
        this.listNews.push(_new);
      }
    }));
    if (this.orderBy) {
      this.changeOrder(this.orderBy);
    }
  }

  getDate(value) {
    var d = value.split('-');
    return new Date(d[2],d[1],d[0]);
  }

  changeOrder(value) {
    this.orderBy = value;
    if (value === '') {
      this.listNews = this._news;
    } else if (value === 'date') {
      this.listNews.sort(function(a, b) {
          var dateA = a['Data de publicação'].split('-');
          a = new Date(dateA[2], dateA[1], dateA[0]);

          var dateB = b['Data de publicação'].split('-');
          b = new Date(dateB[2], dateB[1], dateB[0]);

          return a>b ? -1 : a<b ? 1 : 0;
      });
    } else {
      this.listNews.sort(function(a, b) {
          a = a['Título'];
          b = b['Título'];
          return a>b ? 1 : a<b ? -1 : 0;
      });
    }
  }

  changeFilter(value) {
    this.groupNews(this._news, value);
  }

  formatData(data: string) {
    return data.replace(/-/g, '/');
  }
}
