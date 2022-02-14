import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modification-table',
  templateUrl: './modification-table.component.html',
  styleUrls: ['./modification-table.component.css']
})
export class ModificationTableComponent implements OnInit {

  modify_title: string = 'Mordification';

  constructor() { }

  ngOnInit(): void {
  }

}
