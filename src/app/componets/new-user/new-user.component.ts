import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../componets/service/login.service';


@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  public charge="vendedor";
  public name: string;
  public pass: string;
  public userName: string;
  public date: Date;
  public repass: string;

  constructor(private router: Router,
    private loginInfo: LoginService) { }

  ngOnInit() {
  }

  passKeyup(value: string) {
    this.pass = value;
  }
  nameKeyup(value: string) {
    this.name = value;2
  }
  repassKeyup(value: string) {
    this.repass = value;
  }
  userNameKeyup(value: string) {
    this.userName = value;
  }

  newUser(){
    console.log(this.repass,this.pass,this.name,this.userName)
    if(this.repass==null ||this.pass==null || this.name == null || this.userName == null){
      alert('porfavor ingrese todo los datos')
    }else{
      if(this.pass === this.repass) {
        this.loginInfo.register(this.charge, this.date, this.name, this.pass, this.userName).subscribe(res => {
          alert("Guardado con exito")
          this.router.navigate(['/home']);
        });
      } else {
        alert("Contraseñas diferentes");
      }    
    }
  } 
}
