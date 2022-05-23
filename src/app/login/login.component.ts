import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  public usuario = {
      email : '',
      password : ''
  }
  constructor(private route:Router, private authService: AuthService) { }

  ngOnInit() {
  }

  

  login(){
    /* this.route.navigate(['/folder/Inbox']); */
    const { email, password } = this.usuario;
    this.authService.login(email, password).then(res => {
      console.log("Registro Correcto!", res)
    })
  }

  loginWithGoogle(){
    /* this.route.navigate(['/folder/Inbox']); */
    const { email, password } = this.usuario;
    this.authService.loginWithGoogle(email, password).then(res => {
      console.log("Registro Correcto!", res)
    })
  }

  getUserLogged(){
    this.authService.getUserLogged().subscribe(res => {
      console.log(res?.email)
    })
  }

  logOut(){
    this.authService.logOut();
  }

}
