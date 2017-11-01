import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { NgForm } from '@angular/forms';

import { userClass } from './userClass';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService) { }

  user: userClass;
  confirmPassword : string;


  ngOnInit() {
    this.user = new userClass();
  }

  getUserList() {
    this.userService.getUsers();
  }

  addUser() {
    this.userService.addUser(this.user);
  }

}
