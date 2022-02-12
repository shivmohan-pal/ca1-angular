import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Register } from 'src/app/Register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userModel = new Register('','','','');
  constructor() { }

  ngOnInit(): void {
  }
 onSubmit(userForm:NgForm){ 
 }
}
