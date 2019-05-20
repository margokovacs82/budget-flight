import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { City } from '../models/city.model';

@Injectable({
  providedIn: 'root'
})
export class SearchAllService {

  constructor(private http: HttpClient) { }

  async loadAllStations() {
    try {    
        let city = null;
      await this.http.get('https://mock-air.herokuapp.com/asset/stations').toPromise().then(a => {
      console.log(a);
      city = a as City;
      });
      return city;
    } catch (error) {
      throw 'A szolgáltatás nem elérhető';
    }
  }
}


// keresés url-je:
// https://mock-air.herokuapp.com/search?departureStation=BUD&arrivalStation=BCN&date=2018-07-03