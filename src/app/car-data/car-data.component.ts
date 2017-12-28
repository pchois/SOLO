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

// define the models tied to the HTML
  selectedModel: string = '';
  selectedTrim: string = '';
  selectedYear: string = '';
  selectedYearS3: string = '';
  selectedClassS1: string = '';
  selectedClassS2: string = '';
  selectedClassS3: string = '';
  selectedClassS4: string = '';

// define the elements that will store the data coming back from the APIs
  makes: Make[] = [];
  models: Model[] = [];
  trims: Trim[] = [];
  years: Year[] = [];
  yearsS3: Year[] = [];
  scenario1: Class[] = [];
  scenario2: Class[] = [];
  scenario3: Class[] = [];
  scenario4: Class[] = [];

// define an element that will hold the parameters required to make an API call
// it will be "reset" depending on the user's actions
  query_data = {
    make_id: 0,
    model_id: 0,
    trim_id: 0,
    year_id: 0
  };

  constructor(private cardataService: CarDataService) { }

// call get makes by default, as it is the first thing the user will select
  ngOnInit() {
    this.getMakes();
  }

// reset values for selected\displayed classes to provide empty selections when a user starts a new flow
  resetClasses() {
    this.selectedClassS1 = '';
    this.selectedClassS2 = '';
    this.selectedClassS3 = '';
    this.selectedClassS4 = '';
    this.scenario1 = [];
    this.scenario2 = [];
    this.scenario3 = [];
    this.scenario4 = [];
  }

// reset values for selected\displayed models to provide empty selections when a user starts a new flow
  resetModels() {
    this.selectedModel = '';
    this.models = [];
  }

// reset values for selected\displayed trims to provide empty selections when a user starts a new flow
  resetTrims() {
    this.selectedTrim = '';
    this.trims = [];
  }

// reset values for selected\displayed years to provide empty selections when a user starts a new flow
  resetYears() {
    this.selectedYear = '';
    this.years = [];
  }

  // reset values for selected\displayed years scenario 3 to provide empty selections when a user starts a new flow
  resetYearsS3() {
    this.selectedYearS3 = '';
    this.yearsS3 = [];
  }

// get makes function, assigns result to the makes element
  getMakes(): void {
    this.cardataService.getMake()
    .subscribe(makes => this.makes = makes);
  }

// get models function, assigns result to the models element
// resets values for models, trims, years and classes when the user starts a new flow
// resets the value of the query parameters
  getModels(item: MatSelectChange): void {
    this.resetModels();
    this.resetTrims();
    this.resetYears();
    this.resetYearsS3();
    this.resetClasses();
    this.query_data = {
      make_id: item.value,
      model_id: 0,
      trim_id: 0,
      year_id: 0
    };
    this.cardataService.getModel(this.query_data.make_id)
    .subscribe(models => this.models = models);
  }

// get trims function, assigns result to the trims element
// resets values for trims, years and classes when the user starts a new flow
// resets the value of the query parameters
// if there are no trims, triggers scenario 3(YearsS3)
// if scenario 3 is false, triggers secenario 1
  getTrims(item: MatSelectChange): void {
    this.resetTrims();
    this.resetYears();
    this.resetYearsS3();
    this.resetClasses();
    const make_id = this.query_data.make_id;
    this.query_data = {
      make_id: make_id,
      model_id: item.value,
      trim_id: 0,
      year_id: 0
    };
    this.cardataService.getTrim(this.query_data.make_id, this.query_data.model_id)
    .subscribe(trims => {
      this.trims = trims
      if(this.trims.length == 0){
        this.getYearsS3(this.query_data.model_id);
        if(this.yearsS3.length == 0){
          this.getScenario1Class(this.query_data.make_id, this.query_data.model_id);
        }
      }
    });
  }

// get years function, assigns result to the years element
// resets values for years and classes when the user starts a new flow
// resets the value of the query parameters
// if there are no years, triggers scenario 2
  getYears(item: MatSelectChange): void {
    this.resetYears();
    this.resetYearsS3();
    this.resetClasses();
    const make_id = this.query_data.make_id;
    const model_id = this.query_data.model_id;
    this.query_data = {
      make_id: make_id,
      model_id: model_id,
      trim_id: item.value,
      year_id: 0
    };
    this.cardataService.getYear(this.query_data.make_id, this.query_data.model_id, this.query_data.trim_id)
    .subscribe(years => {
      this.years = years
      if(this.years.length == 0){
        this.getScenario2Class(this.query_data.make_id, this.query_data.model_id, this.query_data.trim_id);
        }
    });
}

// get years for scenario 3 function, assigns result to the yearss3 element
// resets values for years and classes when the user starts a new flow
// resets the value of the query parameters
  getYearsS3(model_id: number): void {
    this.resetYears();
    this.resetYearsS3();
    this.resetClasses();
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

// get the class for scenario 1, assigns the result to the scenario1 element
// resets values for classes
// doesn't reset values for the query parameter because they are passed in
  getScenario1Class(make_id: number, model_id: number): void {
    this.resetClasses();
    this.cardataService.getScenario1(this.query_data.make_id, this.query_data.model_id)
    .subscribe(scenario1 => this.scenario1 = scenario1);
  }

  // get the class for scenario 2, assigns the result to the scenario2 element
  // resets values for classes
  // doesn't reset values for the query parameter because they are passed in
  getScenario2Class(make_id: number, model_id: number, trim_id: number): void {
    this.resetClasses();
    this.cardataService.getScenario2(this.query_data.make_id, this.query_data.model_id, this.query_data.trim_id)
    .subscribe(scenario2 => this.scenario2 = scenario2);
    }

    // get the class for scenario 3, assigns the result to the scenario3 element
    // resets values for classes
    // resets the value of the query parameters
  getScenario3Class(item: MatSelectChange): void {
    this.resetClasses();
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

  // get the class for scenario 4, assigns the result to the scenario4 element
  // resets values for classes
  // resets the value of the query parameters
  getScenario4Class(item: MatSelectChange): void {
    this.resetClasses();
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
