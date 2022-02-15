import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherDataService } from 'src/services/weather-data.service';

@Component({
  selector: 'app-modification-table',
  templateUrl: './modification-table.component.html',
  styleUrls: ['./modification-table.component.css']
})
export class ModificationTableComponent implements OnInit {

  modify_title: string = 'Mordification';

  constructor(
    private weatherDataService: WeatherDataService,
    private router: Router
    ) { }

  ngOnInit(): void {

  }

  updateWeatherData(){
    this.weatherDataService.updateWeatherData().subscribe(data => {
      if (data.message === "success"){
        alert("Successfully update the weather data!!")
        this.router.navigate(['/', 'home-screen'])
      }
      else {
        alert("Unable to update the weather data!\nPlease try again!")
      }
    })
  }

  deleteWeatherData(){
    if(confirm("Do you really want to delete this weather data?")){
      this.weatherDataService.deleteWeatherData().subscribe(data => {
        if (data.message === "success"){
          alert("Successfully deleted the weather data!!")
          this.router.navigate(['/', 'home-screen'])
        }
        else {
          alert("Unable to delete the weather data!\nPlease try again!")
        }
      })
    }
  }
}
