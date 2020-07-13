import { TestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { FlightService } from './flight.service';

describe('FlightService', () => {
  let service: FlightService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FlightService],
    });
  });

  afterEach(() => {
    TestBed.get(HttpTestingController).verify();
  });

  it('should get flight data', inject(
    [HttpTestingController, FlightService],
    (httpMock: HttpTestingController, flightService: FlightService) => {
      const mockData = [
        {
          arrivalTime: '6:00',
          date: '2020/11/01',
          departureTime: '5:00',
          destination: 'Mumbai (BOM)',
          flightNo: 'AI-101',
          name: 'Air India',
          origin: 'Pune (PNQ)',
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
          arrivalTime: '7:10',
          date: '2020/11/01',
          departureTime: '6:10',
          destination: 'Mumbai (BOM)',
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
          arrivalTime: '13:00',
          date: '2020/11/01',
          departureTime: '11:00',
          destination: 'Delhi (DEL)',
          flightNo: 'SJ-106',
          name: 'SpiceJet',
          origin: 'Bengaluru (BLR)',
          price: 5645,
        },
      ];

      flightService.getData().subscribe((flights) => {
        expect(flights.length).toBe(6);
      });

      const mockRequest = httpMock.expectOne(
        'https://tw-frontenders.firebaseio.com/advFlightSearch.json'
      );

      expect(mockRequest.request.method).toBe('GET');

      mockRequest.flush(mockData);
    }
  ));
});
