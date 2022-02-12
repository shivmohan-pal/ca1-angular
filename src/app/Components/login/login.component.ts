import { Component, OnInit } from '@angular/core';
class User{
  constructor(
    public username:string,
    public pass: string
  ){}
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   user = new User('shiv-mohan','god124#');
  constructor() { }

  ngOnInit(): void {
  }

}
