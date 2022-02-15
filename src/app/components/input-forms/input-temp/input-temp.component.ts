import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from 'src/services/weather-data.service';

@Component({
  selector: 'app-input-temp',
  templateUrl: './input-temp.component.html',
  styleUrls: ['./input-temp.component.css']
})
export class InputTempComponent implements OnInit {

  label_temp: string = 'Temperature ( °c )';
  label_temp_feel: string = 'Feel like Temperature ( °c )';
  label_temp_min: string = 'Min Temperature ( °c )';
  label_temp_max: string = 'Max Temperature ( °c )';

  constructor(private weatherDataService: WeatherDataService) { }

  wtemp: any = null
  wmin: any = null
  wmax: any = null
  wfeel: any = null

  ngOnInit(): void {
  }

  initTemp(){
    this.weatherDataService.initTemp(this.wtemp)
  }
  initMin(){
    this.weatherDataService.initMinTemp(this.wmin)
  }
  initMax(){
    this.weatherDataService.initMaxTemp(this.wmax)
  }
  initFeel(){
    this.weatherDataService.initFeelLike(this.wfeel)
  }

}
