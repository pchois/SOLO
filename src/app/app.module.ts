import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CarDataComponent } from './car-data/car-data.component';

import { HttpClientModule } from '@angular/common/http';
import { CarDataService } from './car-data.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';

import {MatSelectModule} from '@angular/material/select';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    CarDataComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatSelectModule
  ],
  providers: [CarDataService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
