import { RegisterService } from './../register.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  username: string;
  password: string;
  confirmpassword: string;

  constructor(private router: Router, private registerService: RegisterService) { }

  ngOnInit() { }

  registerUser() {
    this.registerService.register(this.username, this.password,this.confirmpassword)
      .subscribe(result => {
        if (result === true) {
          this.router.navigate(['login']);
        }
      });
  }
}