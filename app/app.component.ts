import { Component } from '@angular/core';
import { CD } from './cd.model';
import { Cart } from './cart.model';

@Component({
    selector: 'my-app',
    template: `
    <div class="btn-group" data-toggle="buttons">
      <div class="container well">
        <label class="btn btn-success"  (click)="adminTrue()">
           Admin</label>
        <label class="btn btn-success" (click)="adminFalse()">
           Customer</label>
      </div>
    </div>

    <div class="container" *ngIf="admin">
      <h1 class="text-center">Music Store(admin)</h1>
      <cd-list [childCDList]="masterCDList"
                (clickSender)="editCD($event)"
      ></cd-list>
      <edit-cd [childSelectedCD]="selectedCD"
                (doneClickedSender)="finishedEditing()"
      ></edit-cd>
      <new-cd (newCDSender)="addCD($event)"></new-cd>
    </div>

    <div class="container" *ngIf="!admin">
      <h1 class="text-center">Music Store (customer)</h1>
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
    new CD("Good Song", "Great Artist", "Rock", 13.98),
    new CD("Better Song", "Best Artist", "Indie", 19.76),
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
