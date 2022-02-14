import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insertion-table',
  templateUrl: './insertion-table.component.html',
  styleUrls: ['./insertion-table.component.css']
})
export class InsertionTableComponent implements OnInit {

  insert_title: string = 'Insertion';

  constructor() { }

  ngOnInit(): void {
  }

}
