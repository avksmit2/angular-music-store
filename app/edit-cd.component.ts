import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CD } from './cd.model';

@Component({
  selector: 'edit-cd',
  template: `
    <div *ngIf="childSelectedCD" class="well">
      <h1>Edit CD Information</h1>
      <label>Edit CD Name:</label>
      <input  class="form-control" [(ngModel)]="childSelectedCD.name">
      <label>Edit CD Artist:</label>
      <input  class="form-control" [(ngModel)]="childSelectedCD.artist">
      <label>Edit CD Genre:</label>
      <select [(ngModel)]="childSelectedCD.genre" class="form-control">
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
      <label>Edit CD Price:</label>
      <input  class="form-control" [(ngModel)]="childSelectedCD.price">
      <button (click)="doneClicked()">Done Editing</button>
    </div>
  `
})

export class EditCDComponent {
  @Input() childSelectedCD: CD;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked() {
    this.doneClickedSender.emit();
  }
}
