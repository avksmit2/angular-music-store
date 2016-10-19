import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { CDListComponent } from './cd-list.component';
import { EditCDComponent } from './edit-cd.component';
import { NewCDComponent } from './new-cd.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, CDListComponent, EditCDComponent, NewCDComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
