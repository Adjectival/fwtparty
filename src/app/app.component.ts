import { Component } from '@angular/core';

import { Hero } from './hero';

const HEROES: Hero[] = [
  {
    id: 1,
    name: 'Momo',
    property: 'rock',
    type: 'Attack',
  },
  {
    id: 2,
    name: 'Mu',
    property: 'paper',
    type: 'Balance',
  },
  {
    id: 3,
    name: 'Carrot',
    property: 'paper',
    type: 'Attack',
  },
  {
    id: 4,
    name: 'Deborah',
    property: 'scissors',
    type: 'AreaAttack',
  },
  {
    id: 5,
    name: 'Kai',
    property: 'rock',
    type: 'Balance',
  },
  {
    id: 6,
    name: 'Alfred',
    property: 'rock',
    type: 'AreaAttack',
  },
  {
    id: 7,
    name: 'Lance',
    property: 'scissors',
    type: 'Defense',
  },
  {
    id: 8,
    name: 'Mas',
    property: 'paper',
    type: 'Support',
  },
  {
    id: 9,
    name: 'Ian',
    property: 'rock',
    type: 'Balance',
  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title1 = 'Fantasy War Tactics';
  title2 = 'army sorting app';
  heroes = HEROES;

}
