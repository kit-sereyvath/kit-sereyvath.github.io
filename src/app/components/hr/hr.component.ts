import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hr',
  templateUrl: './hr.component.html',
  styleUrls: ['./hr.component.css']
})
export class HrComponent implements OnInit {

  @Input() w: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
