import { Component, OnInit } from '@angular/core';
import { WeatherData } from 'src/models/weather-data';
import { WeatherDataService } from 'src/services/weather-data.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables-layout.component.html',
  styleUrls: ['./tables-layout.component.css']
})
export class TablesLayoutComponent implements OnInit {

  constructor(private weatherDataService: WeatherDataService) { }

  records_number = 0

  ngOnInit(): void {
    this.weatherDataService.getAllWeatherData(new WeatherData()).subscribe(data => {
      this.records_number = data.length
    })
  }

}
