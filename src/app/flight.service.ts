import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IFlight } from './flight';
import { Observable } from 'rxjs';
import { of } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class FlightService {
  ROOT_URL: 'https://tw-frontenders.firebaseio.com/advFlightSearch.json';
  constructor(private http: HttpClient) { }

  getData() {
    // return this.http.get<IFlight[]>(
    //   'https://tw-frontenders.firebaseio.com/advFlightSearch.json'
    // );
    const mockData = [
      {
        arrivalTime: '7:00',
        date: '2020/11/01',
        departureTime: '6:00',
        destination: 'Mumbai (BOM)',
        flightNo: 'AI-101',
        name: 'Air India',
        origin: 'Delhi (DEL)',
        price: 3525,
      },
      {
        arrivalTime: '7:00',
        date: '2020/11/01',
        departureTime: '6:00',
        destination: 'Mumbai (BOM)',
        flightNo: 'AI-101',
        name: 'Air India',
        origin: 'Delhi (DEL)',
        price: 3525,
      },
      {
        arrivalTime: '9:50',
        date: '2020/11/01',
        departureTime: '7:20',
        destination: 'Delhi (DEL)',
        flightNo: 'AI-102',
        name: 'Air India',
        origin: 'Mumbai (BOM)',
        price: 5635,
      },
      {
        arrivalTime: '03:50',
        date: '2020/11/01',
        departureTime: '01:20',
        destination: 'Delhi (DEL)',
        flightNo: 'AI-102',
        name: 'Air India',
        origin: 'Mumbai (BOM)',
        price: 5635,
      },
      {
        arrivalTime: '8:20',
        date: '2020/11/01',
        departureTime: '7:20',
        destination: 'Pune (PNQ)',
        flightNo: 'AI-102',
        name: 'Air India',
        origin: 'Mumbai (BOM)',
        price: 5635,
      },
      {
        arrivalTime: '3:50',
        date: '2020/11/01',
        departureTime: '1:20',
        destination: 'Bengaluru (BLR)',
        flightNo: 'AI-102',
        name: 'Air India',
        origin: 'Mumbai (BOM)',
        price: 5635,
      },
      {
        arrivalTime: '7:50',
        date: '2020/11/01',
        departureTime: '5:20',
        destination: 'Bengaluru (BLR)',
        flightNo: 'AI-102',
        name: 'Air India',
        origin: 'Mumbai (BOM)',
        price: 5635,
      },
      {
        arrivalTime: '7:10',
        date: '2020/11/01',
        departureTime: '5:10',
        destination: 'Delhi (DEL)',
        flightNo: 'AI-103',
        name: 'Air India',
        origin: 'Pune (PNQ)',
        price: 2537,
      },
      {
        arrivalTime: '10:20',
        date: '2020/11/01',
        departureTime: '8:10',
        destination: 'Delhi (DEL)',
        flightNo: 'AI-104',
        name: 'Air India',
        origin: 'Pune (PNQ)',
        price: 4681,
      },
      {
        arrivalTime: '9:15',
        date: '2020/11/01',
        departureTime: '8:15',
        destination: 'Bengaluru (BLR)',
        flightNo: 'SJ-105',
        name: 'SpiceJet',
        origin: 'Pune (PNQ)',
        price: 3549,
      },
      {
        arrivalTime: '3:30',
        date: '2020/11/01',
        departureTime: '01:00',
        destination: 'Delhi (DEL)',
        flightNo: 'SJ-106',
        name: 'SpiceJet',
        origin: 'Bengaluru (BLR)',
        price: 5645,
      },
      {
        arrivalTime: '4:30',
        date: '2020/11/01',
        departureTime: '2:00',
        destination: 'Delhi (DEL)',
        flightNo: 'AI-101',
        name: 'Air India',
        origin: 'Pune (PNQ)',
        price: 3525,
      },
      {
        arrivalTime: '04:50',
        date: '2020/11/01',
        departureTime: '02:20',
        destination: 'Bengaluru (BLR)',
        flightNo: 'AI-102',
        name: 'Air India',
        origin: 'Mumbai (BOM)',
        price: 5635,
      },
      {
        arrivalTime: '7:40',
        date: '2020/11/01',
        departureTime: '6:10',
        destination: 'Bengaluru (BLR)',
        flightNo: 'AI-103',
        name: 'Air India',
        origin: 'Pune (PNQ)',
        price: 2537,
      },
      {
        arrivalTime: '10:20',
        date: '2020/11/01',
        departureTime: '8:10',
        destination: 'Delhi (DEL)',
        flightNo: 'AI-104',
        name: 'Air India',
        origin: 'Pune (PNQ)',
        price: 6681,
      },
      {
        arrivalTime: '9:15',
        date: '2020/11/01',
        departureTime: '8:15',
        destination: 'Bengaluru (BLR)',
        flightNo: 'SJ-105',
        name: 'SpiceJet',
        origin: 'Pune (PNQ)',
        price: 7549,
      },
      {
        arrivalTime: '13:00',
        date: '2020/11/01',
        departureTime: '11:00',
        destination: 'Delhi (DEL)',
        flightNo: 'SJ-106',
        name: 'SpiceJet',
        origin: 'Bengaluru (BLR)',
        price: 8645,
      },
      {
        arrivalTime: '13:00',
        date: '2020/11/01',
        departureTime: '11:00',
        destination: 'Bengaluru (BLR)',
        flightNo: 'SJ-106',
        name: 'SpiceJet',
        origin: 'Bengaluru (BLR)',
        price: 8645,
      },
      {
        arrivalTime: '7:00',
        date: '2020/11/01',
        departureTime: '6:00',
        destination: 'Mumbai (BOM)',
        flightNo: 'AI-201',
        name: 'Air India',
        origin: 'Pune (PNQ)',
        price: 3525,
      },
      {
        arrivalTime: '7:00',
        date: '2020/11/01',
        departureTime: '05:00',
        destination: 'Mumbai (BOM)',
        flightNo: 'GE-401',
        name: 'Indigo',
        origin: 'Bengaluru (BLR)',
        price: 4525,
      },
      {
        arrivalTime: '4:20',
        date: '2020/11/01',
        departureTime: '3:10',
        origin: 'Mumbai (BOM)',
        flightNo: 'GE-102',
        name: 'Indigo',
        destination: 'Pune (PNQ)',
        price: 3825,
      },
      {
        arrivalTime: '8:10',
        date: '2020/11/01',
        departureTime: '7:40',
        origin: 'Mumbai (BOM)',
        flightNo: 'SJ-375',
        name: 'Spicejet',
        destination: 'Bengaluru (BLR)',
        price: 4913,
      },

      {
        arrivalTime: '04:00',
        date: '2020/11/01',
        departureTime: '02:00',
        destination: 'Delhi (DEL)',
        flightNo: 'AI-203',
        name: 'Air India',
        origin: 'Pune (PNQ)',
        price: 6500,
      },
      {
        arrivalTime: '08:00',
        date: '2020/11/01',
        departureTime: '06:00',
        destination: 'Delhi (DEL)',
        flightNo: 'GE-103',
        name: 'Indigo',
        origin: 'Mumbai (BOM)',
        price: 5960,
      },
      {
        arrivalTime: '04:00',
        date: '2020/11/01',
        departureTime: '02:00',
        origin: 'Delhi (DEL)',
        flightNo: 'SG-475',
        name: 'Spicejet',
        destination: 'Pune (PNQ)',
        price: 6200,
      },
      {
        arrivalTime: '08:00',
        date: '2020/11/01',
        departureTime: '06:00',
        origin: 'Delhi (DEL)',
        flightNo: 'GE-301',
        name: 'Indigo',
        destination: 'Mumbai (BOM)',
        price: 5900,
      },

      {
        arrivalTime: '11:00',
        date: '2020/11/01',
        departureTime: '09:00',
        destination: 'Delhi (DEL)',
        flightNo: 'AI-103',
        name: 'Air India',
        origin: 'Mumbai (BOM)',
        price: 5230,
      },
      {
        arrivalTime: '10:50',
        date: '2020/11/01',
        departureTime: '08:30',
        destination: 'Delhi (DEL)',
        flightNo: 'GE-304',
        name: 'Indigo',
        origin: 'Bengaluru (BLR)',
        price: 4960,
      },
      {
        arrivalTime: '11:00',
        date: '2020/11/01',
        departureTime: '09:00',
        origin: 'Delhi (DEL)',
        flightNo: 'AI-103',
        name: 'Air India',
        destination: 'Mumbai (BOM)',
        price: 5100,
      },
      {
        arrivalTime: '10:50',
        date: '2020/11/01',
        departureTime: '08:30',
        origin: 'Bengaluru (BLR)',
        flightNo: 'GE-104',
        name: 'Indigo',
        destination: 'Mumbai (BOM)',
        price: 4940,
      },

      {
        arrivalTime: '10:30',
        date: '2020/11/01',
        departureTime: '09:00',
        destination: 'Pune (PNQ)',
        flightNo: 'AI-402',
        name: 'Air India',
        origin: 'Bengaluru (BLR)',
        price: 5630,
      },
      {
        arrivalTime: '8:40',
        date: '2020/11/01',
        departureTime: '07:00',
        destination: 'Mumbai (BOM)',
        flightNo: 'GE-401',
        name: 'Indigo',
        origin: 'Bengaluru (BLR)',
        price: 5930,
      },
      {
        arrivalTime: '10:30',
        date: '2020/11/01',
        departureTime: '09:00',
        origin: 'Mumbai (BOM)',
        flightNo: 'AI-204',
        name: 'Air India',
        destination: 'Bengaluru (BLR)',
        price: 5130,
      },
      {
        arrivalTime: '8:40',
        date: '2020/11/01',
        departureTime: '07:00',
        origin: 'Delhi (DEL)',
        flightNo: 'GE-304',
        name: 'Indigo',
        destination: 'Bengaluru (BLR)',
        price: 7820,
      },
      {
        arrivalTime: '8:40',
        date: '2020/11/01',
        departureTime: '07:00',
        destination: 'Delhi (DEL)',
        flightNo: 'GE-403',
        name: 'Indigo',
        origin: 'Bengaluru (BLR)',
        price: 5120,
      }
    ]
    const simpleObservable = new Observable((observer) => {
      observer.next(mockData)
      observer.complete()
    });
    return simpleObservable;
  }
}
