import { Injectable } from '@angular/core';
import { Year, Make, Model, Trim } from './car-data';
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

  constructor(private http: HttpClient) { }

    getMake(): Observable<Make[]> {
    return this.http.get<Make[]>(this.makesUrl);
  }

    getModel(id: number): Observable<Model[]> {
      const url = `${this.modelsUrl}/${id}`;
      return this.http.get<Model[]>(url);
    }

    getTrim(id: number): Observable<Trim[]> {
      const url = `${this.trimsUrl}/${id}`;
      return this.http.get<Trim[]>(url);
    }

    getYear(id: number): Observable<Year[]> {
      const url = `${this.yearsUrl}/${id}`;
      return this.http.get<Year[]>(url);
    }

    getClass(id: number): Observable<Class[]> {
      const url = `${this.classUrl}/${id}`;
      return this.http.get<Class[]>(url);
    }

}
