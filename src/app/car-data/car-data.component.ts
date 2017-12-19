import { Component, OnInit } from '@angular/core';
import { Year, Brand, Model } from '../car-data';
import { CarDataService } from '../car-data.service';

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
    this.getModels();
  }

  getYears(): void {
    this.cardataService.getYear()
    .subscribe(years => this.years = years);
  }

  getBrands(): void {
    this.cardataService.getBrand()
    .subscribe(brands => this.brands = brands);
  }

  getModels(): void {
    this.cardataService.getModel()
    .subscribe(models => this.models = models);
  }

}
