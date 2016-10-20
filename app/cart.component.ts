import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CD } from './cd.model';
import { Cart } from './cart.model';

@Component({
  selector: 'cart',
  template: `
    <div class="well">
      <h1>Your Cart <span> $\{{childCart.getCartTotal()}}</span></h1>
      <div class="orderArea" *ngFor="let currentCd of childCart.cart">
        <div class="albumBox">
          <img class="albumCover"  [src]="currentCd.albumCover" onError="this.src='https://ugotalksalot.files.wordpress.com/2016/06/no-thumb.jpg';">
        <p>cd: {{currentCd.name}}</p>
        </div>

      </div>

    </div>
  `
})

export class CartComponent {
  @Input() childCart: Cart;
  // public newCart = new Cart("hello");

}
