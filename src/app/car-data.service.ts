import { Injectable } from '@angular/core';
import { Year, Make, Model, Trim, Class } from './car-data';
import { Observable } from 'rxjs/Observable';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CarDataComponent } from './car-data/car-data.component';

@Injectable()
export class CarDataService {

  private makesUrl = 'https://solo-api-pms.herokuapp.com/api/solo/makes';  // URL to web api to retrieve makes

  private modelsUrl = 'https://solo-api-pms.herokuapp.com/api/solo/models';  // URL to web api to retrieve models

  private trimsUrl = 'https://solo-api-pms.herokuapp.com/api/solo/trims';  // URL to web api to retrieve trims

  private yearsUrl = 'https://solo-api-pms.herokuapp.com/api/solo/years';  // URL to web api to retrieve years (scenarios 1, 2, and 4)

  private yearsS3Url = 'https://solo-api-pms.herokuapp.com/api/solo/yearss3';  // URL to web api to retrieve years (scenario 3)

  private classS1Url = 'https://solo-api-pms.herokuapp.com/api/solo/s1';  // URL to web api to retrieve class (scenario 1)

  private classS2Url = 'https://solo-api-pms.herokuapp.com/api/solo/s2';  // URL to web api to retrieve class (scenario 2)

  private classS3Url = 'https://solo-api-pms.herokuapp.com/api/solo/s3';  // URL to web api to retrieve class (scenario 3)

  private classS4Url = 'https://solo-api-pms.herokuapp.com/api/solo/s4';  // URL to web api to retrieve class (scenario 4)

  constructor(private http: HttpClient) { }

// functions to call the different URLs, introducing the required elements in the URL query
    getMake(): Observable<Make[]> {
    return this.http.get<Make[]>(this.makesUrl);
  }

    getModel(make_id: number): Observable<Model[]> {
      const url = `${this.modelsUrl}/?makeId=${make_id}`;
      return this.http.get<Model[]>(url);
    }

    getTrim(make_id: number, model_id: number): Observable<Trim[]> {
      const url = `${this.trimsUrl}/?makeId=${make_id}&modelId=${model_id}`;
      return this.http.get<Trim[]>(url);
    }

    getYear(make_id: number, model_id: number, trim_id: number): Observable<Year[]> {
      const url = `${this.yearsUrl}/?makeId=${make_id}&modelId=${model_id}&trimId=${trim_id}`;
      return this.http.get<Year[]>(url);
    }

    getYearS3(make_id: number, model_id: number): Observable<Year[]> {
      const url = `${this.yearsS3Url}/?makeId=${make_id}&modelId=${model_id}`;
      return this.http.get<Year[]>(url);
    }

    getScenario1(make_id: number, model_id: number): Observable<Class[]> {
      const url = `${this.classS1Url}/?makeId=${make_id}&modelId=${model_id}`;
      return this.http.get<Class[]>(url);
    }

    getScenario2(make_id: number, model_id: number, trim_id: number): Observable<Class[]> {
      const url = `${this.classS2Url}/?makeId=${make_id}&modelId=${model_id}&trimId=${trim_id}`;
      return this.http.get<Class[]>(url);
    }

    getScenario3(make_id: number, model_id: number, year_id: number): Observable<Class[]> {
      const url = `${this.classS3Url}/?makeId=${make_id}&modelId=${model_id}&yearId=${year_id}`;
      return this.http.get<Class[]>(url);
    }

    getScenario4(make_id: number, model_id: number, trim_id: number, year_id: number): Observable<Class[]> {
      const url = `${this.classS4Url}/?makeId=${make_id}&modelId=${model_id}&trimId=${trim_id}&yearId=${year_id}`;
      return this.http.get<Class[]>(url);
    }

}
