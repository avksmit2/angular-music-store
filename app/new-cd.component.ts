import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CD } from './cd.model';

@Component({
  selector: 'new-cd',
  template: `
  <div class="container">
    <h1>Enter a New CD</h1>
    <form>
      <label>CD Name:</label>
      <input #newName>
      <label>Artist:</label>
      <input #newArtist>
      <label>Genre:</label>
      <input #newGenre>
      <label>Price:</label>
      <input #newPrice>
      <button (click)="addCDClicked(newName.value, newArtist.value, newGenre.value, newPrice.value)">Add CD</button>
      </form>
  </div>
  `
})

  export class NewCDComponent {
    @Output() newCDSender = new EventEmitter();
    addCDClicked(name: string, artist: string, genre: string, price: number) {
      var newCD: CD = new CD(name, artist, genre, price);
      this.newCDSender.emit(newCD);
    }
  }
