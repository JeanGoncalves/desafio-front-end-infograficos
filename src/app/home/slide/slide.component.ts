import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {

  constructor() { }

	slideIndex = 1;
	mySlide = document.getElementsByClassName("mySlides");
	step = document.getElementsByClassName("btn-step");
	timeSlide = 4;

	ngOnInit() {
		this.showDivs(this.slideIndex);
	}

	ngAfterContentInit() {
		this.looping(this.mySlide.length, this.timeSlide);
	}


	plusDivs(index) {
		this.showDivs(this.slideIndex += index);
	}

	currentDiv(index) {
		this.showDivs(this.slideIndex = index);
	}

	showDivs(slideIndex) {
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
