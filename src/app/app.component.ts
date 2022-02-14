import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: string = "Username";
  sign_up_in_inside_visibility: boolean = true

  logout() {
    this.sign_up_in_inside_visibility = true
  }

  login() {
    this.sign_up_in_inside_visibility = false
  }
}
