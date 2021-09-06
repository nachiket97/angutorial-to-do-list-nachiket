import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {MaterialModule} from './material-module';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox'
import { AppComponent } from './app.component';

@NgModule({
  imports:[ 
    BrowserModule, 
    FormsModule, 
   
    MatButtonModule,
    MatIconModule,
  
    MatCheckboxModule,
    ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
