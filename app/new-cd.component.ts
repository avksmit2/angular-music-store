import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CD } from './cd.model';

@Component({
  selector: 'new-cd',
  template: `
  <div class="well">
    <h1>Enter a New CD</h1>
    <form>
      <label>CD Name:</label>
      <input class="form-control" #newName>
      <label>Artist:</label>
      <input  class="form-control" #newArtist>
      <label>Genre:</label>
      <select #newGenre class="form-control">
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
      <label>Price:</label>
      <input  class="form-control" #newPrice>
      <label>Album Cover:</label>
      <input  class="form-control" #newAlbumCover placeholder="optional">
      <button (click)="addCDClicked(newName.value, newArtist.value, newGenre.value, newPrice.value, newAlbumCover.value)">Add CD</button>
      </form>
  </div>
  `
})

  export class NewCDComponent {
    @Output() newCDSender = new EventEmitter();
    addCDClicked(name: string, artist: string, genre: string, price: number, albumCover: string) {
      var newCD: CD = new CD(name, artist, genre, price, albumCover);
      this.newCDSender.emit(newCD);
    }
  }
