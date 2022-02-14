import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insert-screen',
  templateUrl: './insert-screen.component.html',
  styleUrls: ['./insert-screen.component.css']
})
export class InsertScreenComponent implements OnInit {

  username: string = "Username";

  constructor() { }

  ngOnInit(): void {
  }

}
