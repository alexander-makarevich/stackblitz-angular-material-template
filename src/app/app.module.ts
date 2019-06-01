import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';

@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, FormsModule, MaterialModule ],
  declarations: [ AppComponent, ColorPickerComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
