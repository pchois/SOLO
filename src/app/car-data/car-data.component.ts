import { Component, OnInit } from '@angular/core';
import { Year, Make, Model, Trim } from '../car-data';
import { CarDataService } from '../car-data.service';
import { MatSelectChange } from '@angular/material';

@Component({
  selector: 'app-car-data',
  templateUrl: './car-data.component.html',
  styleUrls: ['./car-data.component.css']
})
export class CarDataComponent implements OnInit {

  years: Year[];
  makes: Make[];
  models: Model[];
  trims: Trim[];

  constructor(private cardataService: CarDataService) { }

  ngOnInit() {
    this.getMakes();
  }

  getMakes(): void {
    this.cardataService.getMake()
    .subscribe(makes => this.makes = makes);
  }

  getModels(item: MatSelectChange): void {
    this.cardataService.getModel(item.value.id)
    .subscribe(models => this.models = models);
  }

  getTrims(item: MatSelectChange): void {
    this.cardataService.getTrim(item.value.model_id)
    .subscribe(trims => this.trims = trims);
  }

  getYears(): void {
    this.cardataService.getYear()
    .subscribe(years => this.years = years);
  }

}
