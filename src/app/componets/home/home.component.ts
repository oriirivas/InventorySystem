import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
   this.validate();
   this.validate(); // si no tienes el back corriendo comentar esta linea 
  }
   /** metodo que valida si hay una sesion abierta, de no ser asi no te deja entrar */
  validate(){
    let open = localStorage.getItem("user");
    if(open== undefined){
      this.router.navigate(['/login']);
    }
  }

}
