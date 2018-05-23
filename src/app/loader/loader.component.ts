import { Component, OnInit, Input, SimpleChange, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class Loader implements OnInit, OnChanges {

  progressLevelTransform: string;

  @Input()
  percentFilled: number = 0;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {

    this.progressLevelTransform = `translate(0px, ${100-changes.percentFilled.currentValue}%)`
  }

}
