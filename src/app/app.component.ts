import { Component } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './herodata';


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
