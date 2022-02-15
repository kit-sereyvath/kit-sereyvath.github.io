import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-insert-screen',
  templateUrl: './insert-screen.component.html',
  styleUrls: ['./insert-screen.component.css']
})
export class InsertScreenComponent implements OnInit {

  constructor(
    private userService: UserService
  ) { }

  username: string = this.userService.getUsername()

  ngOnInit(): void {
  }

}
