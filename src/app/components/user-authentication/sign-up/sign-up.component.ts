import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/models/user';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router
    ) { }

  username: string = ""
  password: string = ""
  user: User = new User()

  ngOnInit(): void {
  }

  createUser(){
    this.user.password = this.password
    this.user.username = this.username
    if(this.username.length == 0 || this.password.length == 0){
      alert("Username and Password must not be empty!!")
    } else {
      this.userService.createUser(this.user).subscribe(data => {
        if(data.message === "user exist"){
          alert("User already exist!!")
        } else if(data.message === "success"){
          this.router.navigate(['/', 'login'])
          alert("User created!!!")
        } else {
          alert("There seem to be an error.\nPlease try again!!")
        } 
      })
    }
  }

}
