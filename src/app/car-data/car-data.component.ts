import { Component, OnInit } from '@angular/core';
import { Year, Make, Model, Trim, Class } from '../car-data';
import { CarDataService } from '../car-data.service';
import { MatSelectChange } from '@angular/material';

@Component({
  selector: 'app-car-data',
  templateUrl: './car-data.component.html',
  styleUrls: ['./car-data.component.css']
})
export class CarDataComponent implements OnInit {

  years: Year[] = [];
  makes: Make[] = [];
  models: Model[] = [];
  trims: Trim[] = [];
  classes: Class[] = [];
  query_data = {
    make_id: 0,
    model_id: 0,
    trim_id: 0,
    year_id: 0
  };

  constructor(private cardataService: CarDataService) { }

  ngOnInit() {
    this.getMakes();
  }

  getMakes(): void {
    this.cardataService.getMake()
    .subscribe(makes => this.makes = makes);
  }

  getModels(item: MatSelectChange): void {
    this.query_data.make_id = item.value;
    this.cardataService.getModel(item.value)
    .subscribe(models => this.models = models);
  }

  getTrims(item: MatSelectChange): void {
    this.query_data.model_id = item.value;
    this.cardataService.getTrim(item.value)
    .subscribe(trims => this.trims = trims);
  }

  getYears(item: MatSelectChange): void {
    this.query_data.trim_id = item.value;
    this.cardataService.getYear(item.value)
    .subscribe(years => this.years = years);
  }

  getClasses(item: MatSelectChange): void {
    this.query_data.year_id = item.value;
    this.cardataService.getClass(item.value)
    .subscribe(classes => this.classes = classes);
  }

}
