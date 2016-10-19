import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CD } from './cd.model';

@Component({
  selector: 'edit-cd',
  template: `
    <div *ngIf="childSelectedCD" class="container">
      <h1>Edit CD Information</h1>
      <label>Edit CD Name:</label>
      <input [(ngModel)]="childSelectedCD.name">
      <label>Edit CD Artist:</label>
      <input [(ngModel)]="childSelectedCD.artist">
      <label>Edit CD Genre:</label>
      <input [(ngModel)]="childSelectedCD.genre">
      <label>Edit CD Price:</label>
      <input [(ngModel)]="childSelectedCD.price">
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
