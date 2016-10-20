import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CD } from './cd.model';
import { Cart } from './cart.model';

@Component({
  selector: 'cart',
  template: `
    <div class="well">
      <h1>Cart</h1>
      <h1>{{childCart.name}}</h1>
    </div>
  `
})

export class CartComponent {
  @Input() childCart: Cart[];
  // public newCart = new Cart("hello");

}
