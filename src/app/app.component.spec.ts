import { TestBed, async } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { ReactiveFormsModule, FormsModule, FormBuilder } from "@angular/forms";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { By } from "@angular/platform-browser";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [ReactiveFormsModule, FormsModule, HttpClientTestingModule],
    }).compileComponents();
  }));

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  //testing app component
  describe("Component: AppComponent", () => {
    let fixture, app;
    beforeEach(() => {
      fixture = TestBed.createComponent(AppComponent);
      app = fixture.debugElement.componentInstance;
      app.flights = [
        {
          arrivalTime: "6:00",
          date: "2020/11/01",
          departureTime: "5:00",
          destination: "Mumbai (BOM)",
          flightNo: "AI-101",
          name: "Air India",
          origin: "Pune (PNQ)",
          price: 3525,
        },
        {
          arrivalTime: "9:50",
          date: "2020/11/01",
          departureTime: "7:20",
          destination: "Delhi (DEL)",
          flightNo: "AI-102",
          name: "Air India",
          origin: "Mumbai (BOM)",
          price: 5635,
        },
        {
          arrivalTime: "7:10",
          date: "2020/11/01",
          departureTime: "6:10",
          destination: "Mumbai (BOM)",
          flightNo: "AI-103",
          name: "Air India",
          origin: "Pune (PNQ)",
          price: 2537,
        },
        {
          arrivalTime: "10:20",
          date: "2020/11/01",
          departureTime: "8:10",
          destination: "Delhi (DEL)",
          flightNo: "AI-104",
          name: "Air India",
          origin: "Pune (PNQ)",
          price: 4681,
        },
        {
          arrivalTime: "9:15",
          date: "2020/11/01",
          departureTime: "8:15",
          destination: "Bengaluru (BLR)",
          flightNo: "SJ-105",
          name: "SpiceJet",
          origin: "Pune (PNQ)",
          price: 3549,
        },
        {
          arrivalTime: "13:00",
          date: "2020/11/01",
          departureTime: "11:00",
          destination: "Delhi (DEL)",
          flightNo: "SJ-106",
          name: "SpiceJet",
          origin: "Bengaluru (BLR)",
          price: 5645,
        },
      ];
    });

    describe("Search Form Validation", () => {
      it("form should be invalid when user does not provide any input", () => {
        expect(app.searchForm.valid).toBeFalsy();
      });
      it("form should be valid when user provides form data for one way journey", () => {
        app.searchForm.controls["origin"].setValue("Pune");
        app.searchForm.controls["destination"].setValue("Mumbai");
        app.searchForm.controls["departureDate"].setValue("2020-11-01");
        app.searchForm.controls["noOfTravellers"].setValue(1);
        expect(app.searchForm.valid).toBeTruthy();

        //form should be invalid if any of the input is not provided
        app.searchForm.controls["departureDate"].setValue("");
        expect(app.searchForm.valid).toBeFalsy();
      });
      it("should set form validity based on journey type", () => {
        app.searchForm.controls["origin"].setValue("Pune");
        app.searchForm.controls["destination"].setValue("Mumbai");
        app.searchForm.controls["departureDate"].setValue("2020-11-01");
        app.searchForm.controls["noOfTravellers"].setValue(1);

        //set journey type to be round trip and dont provide return date
        jasmine.clock().install();
        let isRoundtrip = app.selectJourneyType("roundTrip");
        jasmine.clock().tick(10);
        expect(app.searchForm.valid).toBeFalsy();
        jasmine.clock().uninstall();

        //providing return date should make form valid
        app.searchForm.controls["returnDate"].setValue("2020-11-01");
        expect(app.searchForm.valid).toBeTruthy();
      });
      it("should submit form when clicking on submit", () => {
        fixture.detectChanges();
        app.searchForm.controls["origin"].setValue("Pune");
        app.searchForm.controls["destination"].setValue("Mumbai");
        app.searchForm.controls["departureDate"].setValue("2020-11-01");
        app.searchForm.controls["returnDate"].setValue("2020-11-01");
        app.searchForm.controls["noOfTravellers"].setValue(1);

        let spy: any = spyOn<any>(app, "searchFlight").and.callThrough();
        fixture.debugElement
          .query(By.css("form"))
          .triggerEventHandler("submit", null);
        expect(spy).toHaveBeenCalled();
      });
    });
    describe("search flight methods test", () => {
      beforeEach(() => {
        app.isRoundTrip = true;
        app.searchForm.controls["origin"].setValue("Pune");
        app.searchForm.controls["destination"].setValue("Mumbai");
        app.searchForm.controls["departureDate"].setValue("2020-11-01");
        app.searchForm.controls["returnDate"].setValue("2020-11-01");
        app.searchForm.controls["noOfTravellers"].setValue(1);
      });
    });
    describe("Flags, Variables and Methods Test", () => {
      it("should set journey type flag i.e round trip flag", () => {
        expect(app.isRoundTrip).toBeFalsy();

        jasmine.clock().install();
        app.selectJourneyType("roundTrip");
        jasmine.clock().tick(10);
        expect(app.isRoundTrip).toBeTruthy();
        jasmine.clock().uninstall();
      });
      it("should set show details to true on calling toogleDetails", () => {
        app.toggleOnwardDetails(0);
        expect(app.showDetails[0]).toBeTruthy();
      });
      it("should create unique city set", () => {
        app.createCitySet();
        expect(app.citySet).toBeDefined();
      });
      it("should add origin and destination city on calling addCity", () => {
        app.addCity();
        expect(app.flights[0].originCity).toBeDefined();
        expect(app.flights[0].destinationCity).toBeDefined();
      });
    });
    describe("utility methods", () => {
      it("should convert date to millisecond on calling convertDateToMs", () => {
        let date = "2020/11/01";
        let time = "10:20";
        expect(app.convertDateToMs(date, time)).toBe(1606798200000);
      });

      it("should get difference in minutes between two dates on calling getMinuteDifference", () => {
        let date1 = "2020/11/01";
        let time1 = "6:00";
        let date2 = "2020/11/01";
        let time2 = "5:00";
        expect(app.getMinuteDifference(date1, time1, date2, time2)).toBe(60);
      });

      it("should get layover time between two flights on calling getLayover", () => {
        let flight1 = {
          arrivalTime: "6:00",
          date: "2020/11/01",
          departureTime: "5:00",
          destination: "Mumbai (BOM)",
          flightNo: "AI-101",
          name: "Air India",
          origin: "Pune (PNQ)",
          price: 3525,
        };
        let flight2 = {
          arrivalTime: "9:50",
          date: "2020/11/01",
          departureTime: "7:20",
          destination: "Delhi (DEL)",
          flightNo: "AI-102",
          name: "Air India",
          origin: "Mumbai (BOM)",
          price: 5635,
        };

        expect(app.getLayover(flight1, flight2)).toBe(80);
      });
      it("should format time in minute in hh mm on calling formatInHHmm", () => {
        let minutes = 290;
        expect(app.formatInHHmm(minutes)).toBe("04h 50m");
      });
    });
  });
});
