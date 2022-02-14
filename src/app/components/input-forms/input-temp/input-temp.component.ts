import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
