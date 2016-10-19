import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CD } from './cd.model'

@Component({
  selector: 'cd-list',
  template: `
    <h1>Current CDs</h1>
    <div class="container">
      <div *ngFor="let currentCD of childCDList">
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
          <button (click)="editCD(currentCD)">Edit</button>
        </div>
      </div>
    </div>
  `
})

export class CDListComponent {
  @Input() childCDList: CD[];
  @Output() clickSender = new EventEmitter();
  editCD(cdToEdit: CD) {
    this.clickSender.emit(cdToEdit);
  }
}
