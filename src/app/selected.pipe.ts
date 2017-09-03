import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from './hero.model';

@Pipe({
  name: 'selected',
  pure: false
})
export class SelectedPipe implements PipeTransform {

  transform(input: Hero[], selectedHero) {
    console.log(selectedHero);
    var output: Hero[] = [];
    if (selectedHero === "true") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].selected === false) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (selectedHero === "false") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].selected === true) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }

}
