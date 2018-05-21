import { Component, OnInit, Input } from '@angular/core';

import { Slide } from '../interfaces/slide.interface';
import { CarouselItem } from '../interfaces/carousel-item.interface';
import { Loader } from '../loader/loader.component';

import { MnFullpageModule } from 'ngx-fullpage';
import { preloadImages } from '../utils/image-preloader.util';

@Component({
  selector: 'app-slide-container',
  templateUrl: './slide-container.component.html',
  styleUrls: ['./slide-container.component.css']
})
export class SlideContainerComponent implements OnInit {
  currentIndex: number = 0;
  percentFilled: number = 0;

  isLoaded: boolean = false;
  interval: number = 1000;
  carouselRunner: any;

  @Input()
  slides: Slide[] = [];
  @Input()
  carousel: CarouselItem[] = [];

  ngOnInit() {
    preloadImages(this.slides.concat(this.carousel as any), 'img')
    .subscribe(loadedImages => {
      this.percentFilled = Math.ceil((loadedImages / (this.slides.length + this.carousel.length)) * 100);
      console.log(this.percentFilled);

      if (this.percentFilled === 100) {
        this.startCarousel();
        this.isLoaded = true;
      }
    });
  }

  onLeave = (index: number, nextIndex: number, direction: string) => {
    console.log(index, nextIndex, direction);
    if (index === 1 && direction === 'down') {
      clearInterval(this.carouselRunner);
      return;
    }
    if (index === 2 && direction === 'up') {
      this.startCarousel();
      return;
    }
  }

  return(): void {
    window.location.href = 'https://sites.google.com/a/d219.org/davmal/ap-spanish/los-sitios-web-2017-2018';
  }

  private startCarousel(): void {
    this.carouselRunner = setInterval(() => {
      this.currentIndex + 1 >= this.carousel.length ? this.currentIndex = 0 : this.currentIndex++;
    }, this.interval);
  }
}
