import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/models/user';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router
    ) { }

  username: string = ""
  password: string = ""
  user: User = new User()

  ngOnInit(): void {
  }

  authenticateUser(){
    this.user.username = this.username
    this.user.password = this.password
    if (this.username.length == 0 || this.password.length == 0){
      alert("Username and Password must not be empty!!")
    } else {
      this.userService.authenticateUser(this.user).subscribe(data => {
        if(data.message === "success"){
          this.userService.initUsername(this.username)
          this.router.navigate(['/', 'home-screen'])
        } else {
          alert("Wrong username or password!\nPlease try again!!")
        }
      })
    }
  }
}
