import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../../componets/login/login.component';
import { LoginService } from '../../componets/service/login.service';
import {ProductsService} from '../service/products.service'

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent implements OnInit {
  public name= "Developer" 
  private login: LoginComponent

  constructor(private router: Router,
    private loginInfo: LoginService,
    private pruductService: ProductsService) { }

  ngOnInit() {
    this.nombre();
  }

  nombre(){
    this.name=localStorage.getItem("user");
  }
  showInfo(){
    let printTable=this.pruductService.showProduct().subscribe;
    console.log(printTable);

  };

  
  
  

}
