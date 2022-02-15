import { Component, OnInit } from '@angular/core';
import { WeatherData } from 'src/models/weather-data';
import { WeatherDataService } from 'src/services/weather-data.service';

@Component({
  selector: 'app-record-table',
  templateUrl: './record-table.component.html',
  styleUrls: ['./record-table.component.css']
})
export class RecordTableComponent implements OnInit {

  constructor(private weatherDataService: WeatherDataService) { }

  weatherDatas: WeatherData[] = []
  weatherData = new WeatherData()
  province = ""
  date = ""
  time = ""

  ngOnInit(): void {
  }

  getWeatherData(){
    this.weatherData.province = this.province
    this.weatherData.date = this.date
    this.weatherData.time = this.time
    this.weatherDataService.getAllWeatherData(this.weatherData).subscribe(weatherDatas => {
      this.weatherDatas = weatherDatas
    });
  }

}
