import { CD } from './cd.model';

export class Cart {
  public cart: CD[] =[];
  public total: number = 0;
  constructor(public name: string){ };
  getCartTotal(){
    var output: number = 0;
    this.cart.forEach(function(cd){
      output += cd.price;
    });
  return output.toFixed(2);
  }

}
