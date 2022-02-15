import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherDataService } from 'src/services/weather-data.service';

@Component({
  selector: 'app-insertion-table',
  templateUrl: './insertion-table.component.html',
  styleUrls: ['./insertion-table.component.css']
})
export class InsertionTableComponent implements OnInit {

  insert_title: string = 'Insertion';

  constructor(
    private weatherDataService: WeatherDataService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  insertWeatherData(){
    this.weatherDataService.insertWeatherData().subscribe(data => {
      if (data.message === "success"){
        alert("Successfully added the weather data!!")
      } else if(data.message === "data exist"){
        alert("Weather data already existed!")
      }
      else {
        alert("Unable to add the weather data!\nPlease try again!")
      }
      this.router.navigate(['/', 'home-screen'])
    })
  }

}
