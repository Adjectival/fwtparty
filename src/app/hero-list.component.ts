import { Component, OnInit, Input } from '@angular/core';

import { Hero } from './hero';
@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})

export class HeroListComponent implements OnInit {
  @Input() fwtParty: Hero[]
  public please_msg: String = 'Please select a hero';
  public inParty: string = 'no';

  ngOnInit(): void {

  }

}
