import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CD } from './cd.model'

@Component({
  selector: 'cd-list',
  template: `
    <h1>Current CDs</h1>
    <label>Display By Genre</label>
    <select (change)="onChange($event.target.value)" class="form-control">
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
    <div class="container">
      <div *ngFor="let currentCD of childCDList| genre:selectedGenre ">
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
  public selectedGenre = "Show All";
  editCD(cdToEdit: CD) {
    this.clickSender.emit(cdToEdit);
  }
  onChange(optionFromMenu: string){
    this.selectedGenre = optionFromMenu;
  }
}
