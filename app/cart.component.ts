import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CD } from './cd.model';
import { Cart } from './cart.model';

@Component({
  selector: 'cart',
  template: `
    <div class="shoppingCart">
    <img class="shoppingCartOverlay" src="http://4.bp.blogspot.com/-ZCv883ZzkEE/VHuZKcdLlsI/AAAAAAAAEzY/ogHECRIt-4Y/s1600/shopping%2Bcart.png">
       <span class="total"> $\{{childCart.getCartTotal()}}</span>
      <div class="orderArea">
        <div class="albumBox"  *ngFor="let currentCd of childCart.cart">
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
