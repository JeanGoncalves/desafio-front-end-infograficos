import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {

  @Input() slides = [];

  urlSlide = "https://raw.githubusercontent.com/JeanGoncalves/desafio-front-end-infograficos/master/Arquivos/Imagens/Slide/";
	slideIndex = 1;
	timeSlide = 4;
	mySlide = document.getElementsByClassName("mySlides");
  step = document.getElementsByClassName("btn-step");

  constructor() { }

  ngOnInit() {
		this.looping(this.mySlide.length, this.timeSlide);
  }

  ngAfterViewChecked() {
		this.showDivs(this.slideIndex);
  }

	plusDivs(index) {
		this.showDivs(this.slideIndex += index);
	}

	currentDiv(index) {
		this.showDivs(this.slideIndex = index);
	}

	showDivs(slideIndex) {
    if (this.mySlide.length === 0) return;

		let tmp;
		if (slideIndex > this.mySlide.length) {
			this.slideIndex = 1;
		} 
		if (slideIndex < 1) {
			this.slideIndex = this.mySlide.length;
		}

		for (tmp = 0; tmp < this.mySlide.length; tmp++) {
			this.mySlide[tmp]['style'].display = "none"; 
			this.step[tmp].className = this.step[tmp].className.replace(" change", "");
		}

		this.mySlide[this.slideIndex - 1]['style'].display = "block";
		this.step[this.slideIndex - 1].className += " change";
	}

	looping(maxLength, time) {
		setInterval(() => this.plusDivs(1), time * 1000);
	}

}
