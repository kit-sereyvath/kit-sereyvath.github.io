import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modify-screen',
  templateUrl: './modify-screen.component.html',
  styleUrls: ['./modify-screen.component.css']
})
export class ModifyScreenComponent implements OnInit {

  username: string = "Username";

  constructor() { }

  ngOnInit(): void {
  }

}
