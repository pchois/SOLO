import { Injectable } from '@angular/core';
import { Year, Brand, Model } from './car-data';
import { Observable } from 'rxjs/Observable';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class CarDataService {

  private yearsUrl = 'http://localhost:4000/api/solo/years';  // URL to web api

  private brandsUrl = 'http://localhost:4000/api/solo/brands';

  private modelsUrl = 'http://localhost:4000/api/solo/models';

  constructor(private http: HttpClient, private messageService: MessageService) { }

    getYear(): Observable<Year[]> {
      return this.http.get<Year[]>(this.yearsUrl);
    }

    getBrand(): Observable<Brand[]> {
      return this.http.get<Brand[]>(this.brandsUrl);
    }

    getModel(): Observable<Model[]> {
      return this.http.get<Model[]>(this.modelsUrl);
    }

    /** Log a CarDataService message with the MessageService */
    private log(message: string) {
      this.messageService.add('CarDataService: ' + message);
    }

}
