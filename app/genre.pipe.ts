import {Pipe, PipeTransform} from '@angular/core';
import {Task} from './CD.model';

@Pipe({
  name: "genre",
  pure: false
})
  export class GenrePipe implements PipeTransform {
    transform(input: Task[], genre) {
      var output: CD[] = [];
      if(genre !== "Show All"){
        for (var i = 0; i < input.length; i++) {
          if (input[i].genre === genre) {
            output.push(input[i]);
        }
      }
        return output;
      }
      else{
        return input;
      }
    }
  }
