import { Component } from '@angular/core';
import { CD } from './cd.model'

@Component({
    selector: 'my-app',
    template: `
    <div class="container">
      <h1 class="text-center">Music Store</h1>
      <cd-list [childCDList]="masterCDList"
                (clickSender)="editCD($event)"
      ></cd-list>
      <edit-cd [childSelectedCD]="selectedCD"
                (doneClickedSender)="finishedEditing()"
      ></edit-cd>
      <new-cd (newCDSender)="addCD($event)"></new-cd>
    </div>
    `
})

export class AppComponent {
  public masterCDList: CD[] = [
    new CD("Good Song", "Great Artist", "Rock", 13.98),
    new CD("Better Song", "Best Artist", "Indie", 19.76),
    new CD("Bad Song", "Poor Artist", "Rap", 4.23)
  ];
  selectedCD: CD = null;
  editCD(clickedCD: CD) {
    this.selectedCD = clickedCD;
  }
  finishedEditing() {
    this.selectedCD = null;
  }
  addCD(newCDFromChild: CD) {
    this.masterCDList.push(newCDFromChild);
  }
}
