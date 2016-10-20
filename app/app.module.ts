import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { CDListComponent } from './cd-list.component';
import { EditCDComponent } from './edit-cd.component';
import { NewCDComponent } from './new-cd.component';
import { CartComponent } from './cart.component';
import { CustomerCDListComponent } from './customer-cd-list.component';
import { GenrePipe } from './genre.pipe';
import { ArtistPipe } from './artist.pipe';
import { PricePipe } from './price.pipe';


@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, CDListComponent, EditCDComponent, NewCDComponent, CartComponent, CustomerCDListComponent,  GenrePipe, ArtistPipe, PricePipe ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
