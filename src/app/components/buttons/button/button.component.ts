import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() text: string | undefined;
  @Input() b_color: string | undefined;
  @Input() t_color: string | undefined;
  @Input() fw: string | undefined;
  @Input() fs: string | undefined;
  @Input() padding: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
