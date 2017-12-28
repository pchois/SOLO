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

  selectedModel: string = '';
  selectedTrim: string = '';
  selectedYear: string = '';
  selectedYearS3: string = '';

  selectedClassS1: string = '';
  selectedClassS2: string = '';
  selectedClassS3: string = '';
  selectedClassS4: string = '';

  makes: Make[] = [];
  models: Model[] = [];
  trims: Trim[] = [];
  years: Year[] = [];
  yearsS3: Year[] = [];

  scenario1: Class[] = [];
  scenario2: Class[] = [];
  scenario3: Class[] = [];
  scenario4: Class[] = [];

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
    this.selectedModel = '';
    this.selectedTrim = '';
    this.selectedYear = '';
    this.selectedClassS1 = '';
    this.selectedClassS2 = '';
    this.selectedClassS3 = '';
    this.selectedClassS4 = '';
    this.models = [];
    this.trims = [];
    this.years = [];
    this.scenario4 = [];
    this.scenario1 = [];
    this.scenario2 = [];
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
    this.selectedTrim = '';
    this.selectedYear = '';
    this.selectedClassS1 = '';
    this.selectedClassS2 = '';
    this.selectedClassS3 = '';
    this.selectedClassS4 = '';
    this.trims = [];
    this.years = [];
    this.scenario1 = [];
    this.scenario2 = [];
    this.scenario3 = [];
    this.scenario4 = [];
    const make_id = this.query_data.make_id;
    this.query_data = {
      make_id: make_id,
      model_id: item.value,
      trim_id: 0,
      year_id: 0
    };
    console.log(this.query_data);
    this.cardataService.getTrim(this.query_data.make_id, this.query_data.model_id)
    .subscribe(trims => {
      this.trims = trims
      if(this.trims.length == 0){
        this.getYearsS3(this.query_data.model_id);
        if(this.yearsS3.length == 0){
          console.log('called yearsS3');
          this.getScenario1Class(this.query_data.make_id, this.query_data.model_id);
        }
      }
    });
  }

  getYears(item: MatSelectChange): void {
    this.selectedYear = '';
    this.years = [];
    this.scenario1 = [];
    this.scenario2 = [];
    this.scenario3 = [];
    this.scenario4 = [];
    const make_id = this.query_data.make_id;
    const model_id = this.query_data.model_id;
    this.query_data = {
      make_id: make_id,
      model_id: model_id,
      trim_id: item.value,
      year_id: 0
    };
    console.log(this.query_data);
    this.cardataService.getYear(this.query_data.make_id, this.query_data.model_id, this.query_data.trim_id)
    .subscribe(years => {
      this.years = years
      if(this.years.length == 0){
        this.getScenario2Class(this.query_data.make_id, this.query_data.model_id, this.query_data.trim_id);
        }
    });
}

  getYearsS3(model_id: number): void {
    this.selectedYearS3 = '';
    this.yearsS3 = [];
    this.scenario1 = [];
    this.scenario2 = [];
    this.scenario3 = [];
    this.scenario4 = [];
    const make_id = this.query_data.make_id;
    this.query_data = {
      make_id: make_id,
      model_id: model_id,
      trim_id: 0,
      year_id: 0
    };
    this.cardataService.getYearS3(this.query_data.make_id, this.query_data.model_id)
    .subscribe(yearsS3 => this.yearsS3 = yearsS3);
  }

  getScenario1Class(make_id: number, model_id: number): void {
    this.selectedClassS1 = '';
    this.selectedClassS2 = '';
    this.selectedClassS3 = '';
    this.selectedClassS4 = '';
    this.scenario1 = [];
    this.scenario2 = [];
    this.scenario3 = [];
    this.scenario4 = [];
    this.cardataService.getScenario1(this.query_data.make_id, this.query_data.model_id)
    .subscribe(scenario1 => this.scenario1 = scenario1);
  }

  getScenario2Class(make_id: number, model_id: number, trim_id: number): void {
    this.selectedClassS1 = '';
    this.selectedClassS2 = '';
    this.selectedClassS3 = '';
    this.selectedClassS4 = '';
    this.scenario1 = [];
    this.scenario2 = [];
    this.scenario3 = [];
    this.scenario4 = [];
    this.cardataService.getScenario2(this.query_data.make_id, this.query_data.model_id, this.query_data.trim_id)
    .subscribe(scenario2 => this.scenario2 = scenario2);
    }

  getScenario3Class(item: MatSelectChange): void {
    this.selectedClassS1 = '';
    this.selectedClassS2 = '';
    this.selectedClassS3 = '';
    this.selectedClassS4 = '';
    this.scenario1 = [];
    this.scenario2 = [];
    this.scenario3 = [];
    this.scenario4 = [];
    const make_id = this.query_data.make_id;
    const model_id = this.query_data.model_id;
    this.query_data = {
      make_id: make_id,
      model_id: model_id,
      trim_id: 0,
      year_id: item.value
    };
    this.cardataService.getScenario3(this.query_data.make_id, this.query_data.model_id, this.query_data.year_id)
    .subscribe(scenario3 => this.scenario3 = scenario3);
  }

  getScenario4Class(item: MatSelectChange): void {
    this.selectedClassS1 = '';
    this.selectedClassS2 = '';
    this.selectedClassS3 = '';
    this.selectedClassS4 = '';
    this.scenario1 = [];
    this.scenario2 = [];
    this.scenario3 = [];
    this.scenario4 = [];
    const make_id = this.query_data.make_id;
    const model_id = this.query_data.model_id;
    const trim_id = this.query_data.trim_id;
    this.query_data = {
      make_id: make_id,
      model_id: model_id,
      trim_id: trim_id,
      year_id: item.value
    };
    this.cardataService.getScenario4(this.query_data.make_id, this.query_data.model_id, this.query_data.trim_id, this.query_data.year_id)
    .subscribe(scenario4 => this.scenario4 = scenario4);
  }

}
