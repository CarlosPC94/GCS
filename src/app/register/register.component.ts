import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  public usuario = {
    email : '',
    password : ''
  }

  constructor(private route:Router, private authService: AuthService, private firestore: FirestoreService) { }

  ngOnInit() {}

  SignIn(){
    /* this.route.navigate(['/folder/Inbox']); */
    const { email, password } = this.usuario;
    this.authService.register(email, password).then(res => {
      if (res != null){
        console.log("Registro Correcto!", res);
        this.firestore.createDoc(this.usuario, "Users", this.usuario.email)
      }     
      else
        console.log("Registro Incorrecto!")
    })
  }

}
