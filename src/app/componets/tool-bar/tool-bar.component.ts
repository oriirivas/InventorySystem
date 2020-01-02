import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../../componets/service/login-service.service';
import { LoginComponent } from '../../componets/login/login.component';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent implements OnInit {
  public name= "Developer" 
  private login: LoginComponent

  constructor(private router: Router,
    private loginInfo: LoginServiceService
    ) { }

  ngOnInit() {
    this.name=this.loginInfo.getName();

  }

  
  
  

}
