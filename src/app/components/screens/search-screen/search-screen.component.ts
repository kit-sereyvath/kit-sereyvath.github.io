import { Component, OnInit } from '@angular/core';
import { WeatherData } from 'src/models/weather-data';
import { UserService } from 'src/services/user.service';
import { WeatherDataService } from 'src/services/weather-data.service';

@Component({
  selector: 'app-search-screen',
  templateUrl: './search-screen.component.html',
  styleUrls: ['./search-screen.component.css']
})
export class SearchScreenComponent implements OnInit {

  constructor(
    private userService: UserService,
    private weatherDataService: WeatherDataService
  ) { }

  weatherData = new WeatherData()
  weatherDatas: WeatherData[] = []
  username: string = this.userService.getUsername()
  

  ngOnInit(): void { 
  }
}
