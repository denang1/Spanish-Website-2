import { Component, AfterViewInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Slide } from '../interfaces/slide.interface';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements AfterViewInit {
  imgStyle: any = {};

  @Input()
  slide: Slide

  @ViewChild('textBoxEl')
  textBoxElement: ElementRef;

  constructor() { }

  ngAfterViewInit() {
    if (window.outerWidth < 500) {
      const textBoxHeight: number = this.textBoxElement.nativeElement.clientHeight;
      const imgHeight: string = `calc(100% - ${textBoxHeight.toString()}px)`;

      this.imgStyle = {
        height: imgHeight
      };
    }
  }

}
