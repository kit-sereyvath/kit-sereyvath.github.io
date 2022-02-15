import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit {

  
  constructor(
    private userService: UserService
  ) { }

  username: string = this.userService.getUsername()
  

  ngOnInit(): void { }

}
