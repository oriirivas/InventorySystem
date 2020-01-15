import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { LoginService } from '../../componets/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  pass: string
  name: string

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
    if(this.name == null || this.pass == null){
      alert('llene todas las casillas');
    }else{

      localStorage.setItem( "user", this.name );
      let aja =this.loginInfo.showName(this.name);
      let obs = this.loginInfo.login(this.name, this.pass);
      obs.subscribe(validation  => {
      if(validation) {
        this.router.navigate(['/home']);
      }else {
        alert('usuario y pass inválidos');
      }
    });
    }
  }

/** 
  login() {
    if(this.email == null || this.pass == null){
      alert('llene todas las casillas')
    }else{
      let obs = this.loginService.login(this.email, this.pass);
      obs.subscribe(validation  => {
      if(validation) {
        this.router.navigate(['/home']);
      }else {
        alert('usuario y pass inválidos');
      }
    });
    }
  }
*/

}
