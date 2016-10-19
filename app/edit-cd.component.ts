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
      <input  class="form-control" [(ngModel)]="childSelectedCD.genre">
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
