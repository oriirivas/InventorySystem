import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../../componets/login/login.component';
import { LoginService } from '../../componets/service/login.service';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent implements OnInit {
  public name= "Developer" 
  private login: LoginComponent

  constructor(private router: Router,
    private loginInfo: LoginService
    ) { }

  ngOnInit() {
    this.nombre();
  }

  nombre(){
    this.name=this.loginInfo.getName();
  }

  
  
  

}
