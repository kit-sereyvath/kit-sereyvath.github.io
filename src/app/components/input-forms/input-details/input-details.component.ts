import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from 'src/services/weather-data.service';

@Component({
  selector: 'app-input-details',
  templateUrl: './input-details.component.html',
  styleUrls: ['./input-details.component.css']
})
export class InputDetailsComponent implements OnInit {

  label_pressure: string = 'Pressure ( pa )';
  label_wind: string = 'Wind ( km/h )';
  label_air_quality: string = 'Air Qaulity ( AQI )';
  label_cloud: string = 'Cloud ( % )';
  label_humidity: string = 'Humidity ( % )';

  wpressure: any = null
  wwind: any = null
  wair: any = null
  whumidity: any = null
  wcloud: any = null

  constructor(private weatherDataService: WeatherDataService) { }

  ngOnInit(): void {
  }

  initPressure(){
    this.weatherDataService.initPressure(this.wpressure)
  }
  initWind(){
    this.weatherDataService.initWind(this.wwind)
  }
  initAir(){
    this.weatherDataService.initAirQuality(this.wair)
  }
  initCloud(){
    this.weatherDataService.initCloud(this.wcloud)
  }
  initHumidity(){
    this.weatherDataService.initHumidity(this.whumidity)
  }

}
