import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { LoginService } from '../../componets/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private pass: string
  private name: string

  constructor(private router: Router,
    private loginInfo: LoginService) { }

  ngOnInit() {    
  }

  passKeyup(value: string) {
    this.pass = value;
  }
  nameKeyup(value: string) {
    this.name = value;
  }

  

  login() {
    let validation =false;
    if(this.name == undefined || this.pass == undefined){
      alert('llene todas las casillas');
    }else{
      
      let obs = this.loginInfo.login(this.name, this.pass);
      obs.subscribe(user  => {
      if(user.tipoRolDto == "administrador") {
        this.router.navigate(['/home']);
        localStorage.setItem( "user", this.name );
      
      }else {
        this.router.navigate(['/inventory-sales']);
        localStorage.setItem( "user", this.name );
      }
    }, error =>{
      alert('usuario y/o contraseña inválidos');
    });
    }
  }



}
