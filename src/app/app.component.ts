import { Component, OnInit } from '@angular/core';
import { carousel } from './constants/carousel.constant';
import { CarouselItem } from './interfaces/carousel-item.interface';
import { slideArray } from './constants/slide-array.constant';
import { Slide } from './interfaces/slide.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  slides: Slide[] = slideArray;
  carousel: CarouselItem[] = carousel;

  title = 'Spanish Website';

  ngOnInit() {
  }

}
