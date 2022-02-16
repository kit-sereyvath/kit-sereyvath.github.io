import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { WeatherData } from 'src/models/weather-data';
import { WeatherDataService } from 'src/services/weather-data.service';

@Component({
  selector: 'app-page-buttons',
  templateUrl: './page-buttons.component.html',
  styleUrls: ['./page-buttons.component.css']
})
export class PageButtonsComponent implements OnInit {

  constructor(private weatherDataService: WeatherDataService) { }

  page = 1
  total_page = 1
  @Output() backward = new EventEmitter();
  @Output() forward = new EventEmitter();

  ngOnInit(): void {
    this.weatherDataService.getAllWeatherData(new WeatherData).subscribe(data => {
      this.total_page = Math.ceil(data.length / 5)
    })
  }

  backone(){
    if (this.page > 1){
      this.page--
      this.backward.emit(null)
    }
  }

  forwardone(){
    if(this.page < this.total_page){
      this.page++
      this.forward.emit(null)
    }
  }

}
