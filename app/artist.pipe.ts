import {Pipe, PipeTransform} from '@angular/core';
import {CD} from './CD.model';

@Pipe({
  name: "artist",
  pure: false
})
  export class ArtistPipe implements PipeTransform {
    transform(input: CD[], artist: string) {
      var output: CD[] = [];
      var stringLength = artist.length;
      if (artist !== "Show All") {
        input.forEach(function(cd) {
          if (cd.artist.toUpperCase().substr(0, stringLength) === artist.toUpperCase()) {
            output.push(cd);
          }
        })
        return output;
      } else {
        return input;
      }
    }
  }
