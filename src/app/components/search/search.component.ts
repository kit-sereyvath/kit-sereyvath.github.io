import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  label_date:string = 'Date:';
  label_time:string = 'Time:';
  label_province:string = 'Province:';
  
  times: string[] = ['none', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12pm'];

  locations: string[] = ['--- none ---', 'Banteay Meanchey', 'Battambang', 'Kampong Cham', 'Kampong Chhnang', 'Kampong Speu', 'Kampong Thom', 'Kampot', 'Koh Kong', 'Kratié', 'Mondulkiri', 'Phnom Penh', 'Preah Vihear', 'Prey Veng', ' Pursat', 'Ratanak Kiri', 'Siem Reap', 'Preah Sihanouk Ville', 'Stung Treng', 'Svay Rieng', 'Tbong Khmum', 'Takéo', 'Oddar Meanchey', 'Kep', 'Pailin'];
  constructor() { }

  ngOnInit(): void {
  }

}
