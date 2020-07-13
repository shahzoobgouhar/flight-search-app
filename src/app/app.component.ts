import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { FlightService } from "./flight.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  //template data variables
  flights: any;
  origin: any;
  destination: any;
  departureDate: any;
  returnDate: any;
  passengers = new Array(5).fill("x").map((x, i) => i + 1);
  searchForm: FormGroup;
  onwardDirectFlights: any;
  onwardMultipleFlights: any[];
  returnDirectFlights: any;
  returnMultipleFlights: any;
  totalOnwardFlights: number;
  totalReturnFlights: number;
  isRoundTrip = false;
  showDetails: any = [];
  showReturnDetails: any = [];
  onwardResult: boolean = false;
  returnResult: boolean = false;
  showErrorsIfAny: boolean;
  citySet: Set<unknown>;

  //template Data methods
  selectJourneyType: (journeyType: any) => boolean;
  toggleOnwardDetails: (index: any) => void;
  toggleReturnDetails: (index: any) => void;
  filterDirectFlight: (directFlight: any) => boolean;
  filterMultipleFlight: (multipleFlight: any) => boolean;
  searchFlight: () => void;
  trackByMultipleFlightNo: (index: number, multipleFlight: any) => any;
  trackByConnectedFlightNo: (index: number, connectedFlight: any) => any;
  trackByFlightNo: (index: number, directFlight: any) => any;
  // filterFlight: () => void;

  constructor(private fb: FormBuilder, private _flightService: FlightService) {
    // this.flights = flight;

    this.searchForm = this.fb.group({
      origin: ["", Validators.required],
      destination: ["", Validators.required],
      departureDate: ["", Validators.required],
      returnDate: [""],
      noOfTravellers: ["", Validators.required],
      maxPrice: [50000],
    });

    this.selectJourneyType = (journeyType) => {
      //set isRoundTrip flag[also a template variable] to specify type of journey
      if (journeyType === "oneWay") {
        this.isRoundTrip = false;
      } else if (journeyType === "roundTrip") {
        this.isRoundTrip = true;
      }
      //updating validation based on type of journey
      setTimeout(() => {
        if (this.isRoundTrip) {
          this.searchForm.get("returnDate").setValidators(Validators.required);
          this.searchForm.get("returnDate").updateValueAndValidity();
        } else {
          this.searchForm.get("returnDate").setValidators(null);
          this.searchForm.get("returnDate").updateValueAndValidity();
        }
      }, 0);
      return this.isRoundTrip;
    };

    //show hide connected flights data
    this.toggleOnwardDetails = (index) => {
      if (typeof this.showDetails[index] === "undefined") {
        this.showDetails[index] = false;
      }
      this.showDetails[index] = !this.showDetails[index];
    };
    this.toggleReturnDetails = (index) => {
      if (typeof this.showReturnDetails[index] === "undefined") {
        this.showReturnDetails[index] = false;
      }
      this.showReturnDetails[index] = !this.showReturnDetails[index];
    };

    // filter flight based on price
    this.filterDirectFlight = (directFlight) => {
      if (
        directFlight.flight.price *
          this.searchForm.get("noOfTravellers").value <=
        this.searchForm.get("maxPrice").value
      ) {
        return true;
      }
      return false;
    };
    this.filterMultipleFlight = (multipleFlight) => {
      if (
        (multipleFlight.flights[0].price + multipleFlight.flights[1].price) *
          this.searchForm.get("noOfTravellers").value <=
        this.searchForm.get("maxPrice").value
      ) {
        return true;
      }
      return false;
    };

    //search flight based on form data
    this.searchFlight = () => {
      if (this.searchForm.valid) {
        let origin = this.searchForm.get("origin").value;
        let destination = this.searchForm.get("destination").value;

        //set origin and destination city with code to display on flight summary section
        this.setOriginAndDestination(origin, destination);

        this.departureDate = this.searchForm.get("departureDate").value;
        this.departureDate = this.departureDate.split("-").join("/");
        this.returnDate = this.searchForm.get("returnDate").value;
        this.returnDate = this.returnDate.split("-").join("/");

        //search direct and connected flight for onward journey
        this.onwardDirectFlights = this._onwardDirectFlights(
          origin,
          destination,
          this.departureDate
        );
        // console.log('onwardDirectFlight', this.onwardDirectFlights);
        this.onwardMultipleFlights = this._onwardMultipleFlights(
          origin,
          destination,
          this.departureDate
        );
        // console.log('onwardMultipleFlights', this.onwardMultipleFlights);
        this.totalOnwardFlights =
          this.onwardDirectFlights.length + this.onwardMultipleFlights.length;

        //template variable to display onward result (flight and summary)
        this.onwardResult = true;

        if (this.isRoundTrip) {
          //search direct and connected flight for return journey
          this.returnDirectFlights = this._returnDirectFlights(
            origin,
            destination,
            this.returnDate
          );
          // console.log('returnDirectFlights', this.returnDirectFlights);
          this.returnMultipleFlights = this._returnMultipleFlights(
            origin,
            destination,
            this.returnDate
          );
          // console.log('returnMultipleFlights', this.returnMultipleFlights);
          this.totalReturnFlights =
            this.returnDirectFlights.length + this.returnMultipleFlights.length;

          //template variable to display onward flight summary: [origin, destination and number of flights]
          this.returnResult = true;
        }
      } else if (this.searchForm.invalid) {
        this.showErrorsIfAny = true;
      }
    };
    //optimize ngFor loop with trackBy
    this.trackByFlightNo = (index: number, directFlight: any) => {
      return directFlight.flight.flightNo;
    };
    this.trackByConnectedFlightNo = (index: number, connectedFlight: any) => {
      return connectedFlight.flightNo;
    };
    this.trackByMultipleFlightNo = (index: number, multipleFlight: any) => {
      return (
        multipleFlight.flights[0].flightNo || multipleFlight.flights[1].flightNo
      );
    };
  }

  ngOnInit() {
    this._flightService.getData().subscribe((data) => {
      this.flights = data;
      //add origin and destination city without code
      this.addCity();
      //create unique city set
      this.createCitySet();
    });
  }

  private createCitySet() {
    let citySet = new Set();
    this.flights.forEach((flight) => {
      citySet.add(flight.origin);
      citySet.add(flight.destination);
    });
    this.citySet = citySet;
  }

  private addCity() {
    this.flights.forEach((flight) => {
      let originCity = flight.origin;
      originCity = originCity.substring(0, originCity.indexOf(" "));
      flight.originCity = originCity;

      let destinationCity = flight.destination;
      destinationCity = destinationCity.substring(
        0,
        destinationCity.indexOf(" ")
      );
      flight.destinationCity = destinationCity;
    });
  }

  private setOriginAndDestination(origin, destination) {
    this.citySet.forEach((city: string) => {
      if (city.includes(origin)) {
        this.origin = city;
      }
      if (city.includes(destination)) {
        this.destination = city;
      }
    });
  }

  //searching direct flights
  private directFlights = (origin, destination, date) => {
    let directFlights = [];
    this.flights.forEach((flight) => {
      if (
        flight.origin.includes(origin) &&
        flight.destination.includes(destination) &&
        flight.date === date
      ) {
        let totalDuration: any = this.getMinuteDifference(
          flight.date,
          flight.arrivalTime,
          flight.date,
          flight.departureTime
        );
        totalDuration = this.formatInHHmm(totalDuration);
        directFlights.push({
          flight,
          totalDuration: totalDuration,
        });
      }
    });
    return directFlights;
  };

  private _onwardDirectFlights = (origin, destination, date) => {
    return this.directFlights(origin, destination, date);
  };

  private _returnDirectFlights = (origin, destination, date) => {
    return this.directFlights(destination, origin, date);
  };

  //searching multiple flights
  private multipleFlights = (origin, destination, date) => {
    const minLayover = 30;
    let multipleFlights = [];
    this.flights.forEach((flight1) => {
      if (flight1.origin.includes(origin) && flight1.date == date) {
        this.flights.forEach((flight2) => {
          if (
            flight2.origin.includes(flight1.destination) &&
            flight2.destination.includes(destination)
          ) {
            let flight1Duration: any = this.getMinuteDifference(
              flight1.date,
              flight1.arrivalTime,
              flight1.date,
              flight1.departureTime
            );
            let flight2Duration: any = this.getMinuteDifference(
              flight2.date,
              flight2.arrivalTime,
              flight2.date,
              flight2.departureTime
            );
            let flightDuration = flight1Duration + flight2Duration;
            flight1Duration = this.formatInHHmm(flight1Duration);
            flight1.duration = flight1Duration;
            flight2Duration = this.formatInHHmm(flight2Duration);
            flight2.duration = flight2Duration;
            let layover: any = this.getLayover(flight1, flight2);
            let totalDuration = flightDuration + layover;
            totalDuration = this.formatInHHmm(totalDuration);
            if (layover >= minLayover) {
              layover = this.formatInHHmm(layover);
              multipleFlights.push({
                flights: [flight1, flight2],
                layover: layover,
                totalDuration: totalDuration,
              });
            }
          }
        });
      }
    });
    return multipleFlights;
  };

  private _onwardMultipleFlights = (origin, destination, date) => {
    return this.multipleFlights(origin, destination, date);
  };
  private _returnMultipleFlights = (origin, destination, date) => {
    return this.multipleFlights(destination, origin, date);
  };

  //utility function: converting (date+time) to misliseconds
  private convertDateToMs = (date, time) => {
    let dateArr = date.split("/");
    let timeArr = time.split(":");
    let [year, month, day, hour, minute] = [...dateArr, ...timeArr];
    const dateTime: [number, number, number, number, number] = [
      year,
      month,
      day,
      hour,
      minute,
    ];
    let timeinMs = new Date(...dateTime).getTime();
    return timeinMs;
  };

  //utility function : returning minutes difference between two dates
  private getMinuteDifference = (date1, time1, date2, time2) => {
    let timeinMs1 = this.convertDateToMs(date1, time1);
    let timeinMs2 = this.convertDateToMs(date2, time2);
    let minutes = (timeinMs1 - timeinMs2) / 1000 / 60;
    return minutes;
  };

  // utility function to get layover time between connected flights
  private getLayover = (flight1, flight2) => {
    let layover = this.getMinuteDifference(
      flight2.date,
      flight2.departureTime,
      flight1.date,
      flight1.arrivalTime
    );
    return layover;
  };

  //utility function to format minute in HHmm
  private formatInHHmm(duration) {
    let hours: any = Math.floor(duration / 60);
    let minutes: any = duration % 60;
    if (hours < 10) {
      hours = `0${hours}`;
    }
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    return `${hours}h ${minutes}m`;
  }
}
