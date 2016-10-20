import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CD } from './cd.model';
import { Cart } from './cart.model';

@Component({
  selector: 'customer-cd-list',
  template: `
    <h1>Current CDs</h1>
{{childCart.name}}
    <div id="filters">
      <label>Display By Genre</label>
      <select (change)="onGenreChange($event.target.value)" class="form-control">
        <option selected="selected">Show All</option>
        <option>Country</option>
        <option>Rap</option>
        <option>Classical</option>
        <option>Jazz</option>
        <option>Rock</option>
        <option>Reggae</option>
        <option>Indie</option>
        <option>Techno</option>
        <option>Latin American</option>
      </select>
      <label>Display By Artist</label>
      <input (keyup)="onArtistChange($event.target.value)" class="form-control">
      <label>Sort By Price</label>
      <select (change)="onPriceSortChange($event.target.value)" class="form-control">
        <option selected="selected">Show All</option>
        <option>Descending</option>
        <option>Ascending</option>
      </select>
    </div>
    <div class="container">
      <div *ngFor="let currentCD of childCDList| genre:selectedGenre | artist:selectedArtist |price:selectedPriceSort ">
        <h3>{{ currentCD.name }}</h3>
        <div class="row">
          <div class="col-xs-2">
        <img class="albumCover"  [src]="currentCD.albumCover" onError="this.src='https://ugotalksalot.files.wordpress.com/2016/06/no-thumb.jpg';">
          </div>
          <div class="col-xs-4">
            <h5>Artist: {{ currentCD.artist }}</h5>
          </div><div class="col-xs-4">
            <h5>Genre: {{ currentCD.genre }}</h5>
          </div><div class="col-xs-2">
            <h5> $ {{ currentCD.price }}</h5>
          </div>
          <button (click)="addToCart(currentCD)">Add To Cart + </button>
        </div>
      </div>
    </div>
  `
})

export class CustomerCDListComponent {
  @Input() childCDList: CD[];
  @Input() childCart: Cart[];
  @Output() clickSender = new EventEmitter();
  public selectedGenre = "Show All";
  public selectedArtist = "Show All";
  public selectedPriceSort = "Show All";
  // public myCart = new Cart("my cart");

  onGenreChange(optionFromMenu: string){
    this.selectedGenre = optionFromMenu;
  }
  onArtistChange(artistEntered: string) {
    this.selectedArtist = artistEntered;
  }
  onPriceSortChange(priceSortEntered: string){
    this.selectedPriceSort = priceSortEntered;
  }
  // addToCart(currentCd:CD){
  //   this.myCart.cart.push(currentCd);
  // }

}
