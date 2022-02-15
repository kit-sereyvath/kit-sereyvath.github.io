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

  weatherDataAll: WeatherData[] = []
  weatherDatas: WeatherData[] = []
  searchParams = new WeatherData()
  province = ""
  date = ""
  time = ""
  count = 0

  ngOnInit(): void {
    this.weatherDataService.getAllWeatherData(this.searchParams).subscribe( data => {
      this.weatherDataAll = data.reverse()
      this.weatherDatas = this.weatherDataAll.slice(0, 5)
    })
  }

  nextWeatherData(){
    this.count++
    this.weatherDatas = this.weatherDataAll.slice(5*this.count, 5*(this.count+1))
  }

  previousWeatherData(){
    this.count--
    this.weatherDatas = this.weatherDataAll.slice(5*this.count, 5*(this.count+1))
  }

}
