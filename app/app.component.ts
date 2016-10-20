import { Component } from '@angular/core';
import { CD } from './cd.model';
import { Cart } from './cart.model';

@Component({
    selector: 'my-app',
    template: `

      <div class="navigation well">
        <label class="btn btn-success"  (click)="adminTrue()">
           Admin</label>
        <label class="btn btn-success" (click)="adminFalse()">
           Customer</label>
      </div>


    <div class="container" *ngIf="admin">

      <h1 class="text-center storeName pulse">My Music Store(admin)</h1>
      <cd-list [childCDList]="masterCDList"
                (clickSender)="editCD($event)"
      ></cd-list>
      <edit-cd [childSelectedCD]="selectedCD"
                (doneClickedSender)="finishedEditing()"
      ></edit-cd>
      <new-cd (newCDSender)="addCD($event)"></new-cd>
    </div>

    <div class="container" *ngIf="!admin">
      <h1 class="text-center storeName pulse">Emergency Perfume for the Soul</h1>
      <customer-cd-list [childCDList]="masterCDList"
                        [childCart]="masterCart"
                (addToCartSender)="addCdToCart($event)"
      ></customer-cd-list>
      <cart
        [childCart]="masterCart"
      ></cart>
    </div>


    `
})

export class AppComponent {
  public masterCDList: CD[] = [
    new CD("Lateralus", "Tool", "Rock", 18.98, "https://i.ytimg.com/vi/JCDjP4JnpGU/maxresdefault.jpg"),
    new CD("Salival", "Tool", "Rock", 19.76, "https://upload.wikimedia.org/wikipedia/en/a/a0/Salival.jpg"),
    new CD("Bad Song", "Poor Artist", "Rap", 4.23)
  ];
  public masterCart = new Cart("myCart");
  // this.masterCart;
  // public newCd = new CD("Bad Song", "Poor Artist", "Rap", 4.23);

  public selectedCD: CD = null;
  public admin: boolean = false;
  // public customer: boolean = true;
  editCD(clickedCD: CD) {
    this.selectedCD = clickedCD;
  }
  finishedEditing() {
    this.selectedCD = null;
  }
  addCD(newCDFromChild: CD) {
    this.masterCDList.push(newCDFromChild);
  }
  addCdToCart(clickedCd: CD){
    this.masterCart.cart.push(clickedCd);
  }
  adminTrue(){
    this.admin = true;
  }
  adminFalse(){
    this.admin = false;
  }
}
