import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button-hoverable',
  templateUrl: './button-hoverable.component.html',
  styleUrls: ['./button-hoverable.component.css']
})
export class ButtonHoverableComponent implements OnInit {

  @Input() text: string | undefined;
  @Input() b_color: string | undefined;
  @Input() t_color: string | undefined;
  @Input() fw: string | undefined;
  @Input() fs: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
