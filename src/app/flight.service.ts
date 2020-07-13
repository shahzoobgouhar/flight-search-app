import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IFlight } from './flight';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FlightService {
  ROOT_URL: 'https://tw-frontenders.firebaseio.com/advFlightSearch.json';
  constructor(private http: HttpClient) {}

  getData(): Observable<IFlight[]> {
    return this.http.get<IFlight[]>(
      'https://tw-frontenders.firebaseio.com/advFlightSearch.json'
    );
  }
}
