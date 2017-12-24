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
  classes2: Class[] = [];
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
    this.query_data = {
      make_id: item.value,
      model_id: 0,
      trim_id: 0,
      year_id: 0
    };
    console.log(this.query_data);
    this.cardataService.getModel(this.query_data.make_id)
    .subscribe(models => this.models = models);
  }

  getTrims(item: MatSelectChange): void {
    const make_id = this.query_data.make_id;
    this.query_data = {
      make_id: make_id,
      model_id: item.value,
      trim_id: 0,
      year_id: 0
    };
    console.log(this.query_data);
    this.cardataService.getTrim(this.query_data.make_id, this.query_data.model_id)
    .subscribe(trims => this.trims = trims);
    if(this.trims.length == 0){
      this.cardataService.getClass2(this.query_data.make_id, this.query_data.model_id)
      .subscribe(classes2 => this.classes2 = classes2);
      console.log(this.classes2);
    }
  }

  getYears(item: MatSelectChange): void {
    const make_id = this.query_data.make_id;
    const model_id = this.query_data.model_id;
    this.query_data = {
      make_id: make_id,
      model_id: model_id,
      trim_id: item.value,
      year_id: 0
    };
    console.log(this.query_data);
    this.query_data.trim_id = item.value;
    this.cardataService.getYear(this.query_data.make_id, this.query_data.model_id, this.query_data.trim_id)
    .subscribe(years => this.years = years);
  }

  getClasses(item: MatSelectChange): void {
    const make_id = this.query_data.make_id;
    const model_id = this.query_data.model_id;
    const trim_id = this.query_data.trim_id;
    this.query_data = {
      make_id: make_id,
      model_id: model_id,
      trim_id: trim_id,
      year_id: item.value
    };
    console.log(this.query_data);
    this.query_data.year_id = item.value;
    this.cardataService.getClass(this.query_data.make_id, this.query_data.model_id, this.query_data.trim_id, this.query_data.year_id)
    .subscribe(classes => this.classes = classes);
  }



}
