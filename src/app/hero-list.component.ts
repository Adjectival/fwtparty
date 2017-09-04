import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Hero } from './hero';
@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent  {
  @Input() heroList: Hero[];
  @Output() clickSender = new EventEmitter();
}
