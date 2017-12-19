import { Injectable } from '@angular/core';
import { Year, Brand, Model } from './car-data';
import { Observable } from 'rxjs/Observable';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CarDataComponent } from './car-data/car-data.component';

@Injectable()
export class CarDataService {

  private yearsUrl = 'http://localhost:4000/api/solo/years';  // URL to web api to retrieve years

  private brandsUrl = 'http://localhost:4000/api/solo/brands';  // URL to web api to retrieve brands

  private modelsUrl = 'http://localhost:4000/api/solo/models';  // URL to web api to retrieve models based on the selected brand

  constructor(private http: HttpClient, private messageService: MessageService) { }

    getYear(): Observable<Year[]> {
      return this.http.get<Year[]>(this.yearsUrl);
    }

    getBrand(): Observable<Brand[]> {
      return this.http.get<Brand[]>(this.brandsUrl);
    }

    getModel(id: number): Observable<Model[]> {
      const url = `${this.modelsUrl}/${id}`;
      return this.http.get<Model[]>(url);
    }

    /** Log a CarDataService message with the MessageService */
    private log(message: string) {
      this.messageService.add('CarDataService: ' + message);
    }

}
