import { Injectable } from '@angular/core';
import { Year, Make, Model, Trim, Class } from './car-data';
import { Observable } from 'rxjs/Observable';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CarDataComponent } from './car-data/car-data.component';

@Injectable()
export class CarDataService {

  private makesUrl = 'http://localhost:4000/api/solo/makes';  // URL to web api to retrieve makes

  private modelsUrl = 'http://localhost:4000/api/solo/models';  // URL to web api to retrieve models based on the selected brand

  private trimsUrl = 'http://localhost:4000/api/solo/trims';  // URL to web api to retrieve trims based on the selected brand and model

  private yearsUrl = 'http://localhost:4000/api/solo/years';  // URL to web api to retrieve years

  private classUrl = 'http://localhost:4000/api/solo/class';  // URL to web api to retrieve class

  private class2Url = 'http://localhost:4000/api/solo/class2';  // URL to web api to retrieve class

  constructor(private http: HttpClient) { }

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

    getClass(make_id: number, model_id: number, trim_id: number, year_id: number): Observable<Class[]> {
      const url = `${this.classUrl}/?makeId=${make_id}&modelId=${model_id}&trimId=${trim_id}&yearId=${year_id}`;
      return this.http.get<Class[]>(url);
    }

    getClass2(make_id: number, model_id: number): Observable<Class[]> {
      const url = `${this.class2Url}/?makeId=${make_id}&modelId=${model_id}`;
      return this.http.get<Class[]>(url);
    }

}
