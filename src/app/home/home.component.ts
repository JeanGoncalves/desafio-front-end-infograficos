import { Component, OnInit } from '@angular/core';
import { AppService } from "./../app.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  slides = [];

  constructor(
    private appService: AppService
  ) { }

  ngOnInit() {
    this.appService.getSlides()
      .then(slides => this.slides = slides[0].imagens);
  }

}
