import { Component, OnInit } from '@angular/core';
import { Year, Brand, Model } from '../car-data';
import { CarDataService } from '../car-data.service';
import { MatSelectChange } from '@angular/material';

@Component({
  selector: 'app-car-data',
  templateUrl: './car-data.component.html',
  styleUrls: ['./car-data.component.css']
})
export class CarDataComponent implements OnInit {

  years: Year[];
  brands: Brand[];
  models: Model[];

  constructor(private cardataService: CarDataService) { }

  ngOnInit() {
    this.getYears();
    this.getBrands();
  }

  getYears(): void {
    this.cardataService.getYear()
    .subscribe(years => this.years = years);
  }

  getBrands(): void {
    this.cardataService.getBrand()
    .subscribe(brands => this.brands = brands);
  }

  getModels(item: MatSelectChange): void {
    this.cardataService.getModel(item.value.id)
    .subscribe(models => this.models = models);
  }

}
