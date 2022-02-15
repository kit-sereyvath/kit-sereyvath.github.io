import { Component, OnInit } from '@angular/core';
import { WeatherData } from 'src/models/weather-data';
import { UserService } from 'src/services/user.service';
import { WeatherDataService } from 'src/services/weather-data.service';

@Component({
  selector: 'app-insert-screen',
  templateUrl: './insert-screen.component.html',
  styleUrls: ['./insert-screen.component.css']
})
export class InsertScreenComponent implements OnInit {

  constructor(
    private userService: UserService,
    private weatherDataService: WeatherDataService
  ) { }

  username: string = this.userService.getUsername()
  weatherData = new WeatherData

  ngOnInit(): void {
    this.weatherData.province = "Phnom Penh"
    this.weatherData.date = new Date().toISOString().split('T')[0];
    this.weatherData.time = "1am"
    this.weatherDataService.changeMessage(this.weatherData)
  }

}
