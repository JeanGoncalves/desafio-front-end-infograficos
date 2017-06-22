import { Component, OnInit } from '@angular/core';
import { AppService } from "./../app.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  slides = [];
  news = [];
  graph = [];

  constructor(
    private appService: AppService
  ) { }

  ngOnInit() {

    /* GET Slides */
    this.appService.getSlides()
      .then(slides => this.slides = slides[0].imagens);
      
    /* GET News*/
    this.appService.getNews()
      .then(news => this.news = news[0].Editorias);

    /* GET Graph*/
    this.appService.getGraph()
      .then(graph => this.graph = graph[0]);
  }

}
