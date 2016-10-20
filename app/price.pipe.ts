import {Pipe, PipeTransform} from '@angular/core';
import {CD} from './CD.model';

@Pipe({
  name: "price",
  pure: false
})
  export class PricePipe implements PipeTransform {
    transform(input: CD[], priceSortType: string) {
      var output: CD[] = [];
      if(priceSortType === "Ascending"){
        output = input.sort(function(a: CD , b: CD){
          return (a.price)-(b.price);
        });
        return output;
      }
      else if(priceSortType ==="Descending"){
        output = input.sort(function(a: CD , b: CD){
          return (b.price)-(a.price);
        });
        return output;
      }
      else{
        return input;
      }
    }
  }
