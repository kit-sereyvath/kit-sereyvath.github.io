import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-modify-screen',
  templateUrl: './modify-screen.component.html',
  styleUrls: ['./modify-screen.component.css']
})
export class ModifyScreenComponent implements OnInit {

  constructor(
    private userService: UserService
  ) { }

  username: string = this.userService.getUsername()

  ngOnInit(): void {
  }

}
