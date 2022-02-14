import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title_weather: string = 'Weather';
  title_cam: string = 'In Cambodia';
  constructor() { }

  ngOnInit(): void {
  }

}
