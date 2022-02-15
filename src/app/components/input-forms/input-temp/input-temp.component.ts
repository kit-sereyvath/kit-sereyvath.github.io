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
    this.weatherDataService.currentMessage.subscribe(data => {
      this.wtemp = data.temp
      this.wmin = data.min_temp
      this.wmax = data.max_temp
      this.wfeel = data.feel_like

      this.initTemp()
      this.initFeel()
      this.initMax()
      this.initMin()
    })
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
