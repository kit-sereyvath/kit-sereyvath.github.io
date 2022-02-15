import { Component, OnInit } from '@angular/core';
import { WeatherData } from 'src/models/weather-data';
import { UserService } from 'src/services/user.service';
import { WeatherDataService } from 'src/services/weather-data.service';

@Component({
  selector: 'app-modify-screen',
  templateUrl: './modify-screen.component.html',
  styleUrls: ['./modify-screen.component.css']
})
export class ModifyScreenComponent implements OnInit {

  constructor(
    private userService: UserService,
    private weatherDataService: WeatherDataService
  ) { }

  username: string = this.userService.getUsername()
  weatherData = new WeatherData

  ngOnInit(): void {
    
  }

}
