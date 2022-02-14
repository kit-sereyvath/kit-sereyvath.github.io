import { Component, OnInit } from '@angular/core';

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


  constructor() { }

  ngOnInit(): void {
  }

}
