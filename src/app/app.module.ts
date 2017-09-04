import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroService } from './hero.service';
import { HeroListComponent } from './hero-list.component';
import { HeroComponent } from './hero.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroListComponent,
    HeroComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
