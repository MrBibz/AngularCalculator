import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { SubstractComponent } from './substract/substract.component';
import { DivideComponent } from './divide/divide.component';
import { MultiplyComponent } from './multiply/multiply.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    SubstractComponent,
    DivideComponent,
    MultiplyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
