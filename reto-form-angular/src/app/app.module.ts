import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArchwizardModule } from 'angular-archwizard';
import  { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './comun/header/header.component';
import { Paso1Component } from './pasos/paso1/paso1.component';
import { Paso2Component } from './pasos/paso2/paso2.component';
import { Paso3Component } from './pasos/paso3/paso3.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Paso1Component,
    Paso2Component,
    Paso3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ArchwizardModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
