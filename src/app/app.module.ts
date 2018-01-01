import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CarDataComponent } from './car-data/car-data.component';

import { HttpClientModule } from '@angular/common/http';
import { CarDataService } from './car-data.service';

import {MatSelectModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CdkTableModule} from '@angular/cdk/table';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  exports: [
    MatSelectModule,
    CdkTableModule,
    MatCardModule
  ]
})
export class DemoMaterialModule {}

@NgModule({
  declarations: [
    AppComponent,
    CarDataComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    DemoMaterialModule
  ],
  providers: [CarDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
