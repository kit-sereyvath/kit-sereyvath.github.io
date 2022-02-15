import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from 'src/services/weather-data.service';

@Component({
  selector: 'app-input-date-time',
  templateUrl: './input-date-time.component.html',
  styleUrls: ['./input-date-time.component.css']
})
export class InputDateTimeComponent implements OnInit {

  label_date: string = 'Date';
  label_time: string = 'Time';
  label_location: string = 'Location';

  times: string[] = ['1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12pm'];

  locations: string[] = ['--- none ---', 'Banteay Meanchey', 'Battambang', 'Kampong Cham', 'Kampong Chhnang', 'Kampong Speu', 'Kampong Thom', 'Kampot', 'Koh Kong', 'Kratié', 'Mondulkiri', 'Phnom Penh', 'Preah Vihear', 'Prey Veng', ' Pursat', 'Ratanak Kiri', 'Siem Reap', 'Preah Sihanouk Ville', 'Stung Treng', 'Svay Rieng', 'Tbong Khmum', 'Takéo', 'Oddar Meanchey', 'Kep', 'Pailin'];

  constructor(private weatherDataService: WeatherDataService) { }

  wprovince: string = "Phnom Penh"
  wtime: string = "1am";
  wdate: string = "02/02/2022"

  ngOnInit(): void {
    this.wdate = new Date().toISOString().split('T')[0];
    this.provinceSelected()
    this.dateSelected()
    this.timeSelected()
  }

  provinceSelected(){
    this.weatherDataService.initProvince(this.wprovince)
  }

  dateSelected(){
    this.weatherDataService.initDate(this.wdate)
  }

  timeSelected(){
    this.weatherDataService.initTime(this.wtime)
  }

}
