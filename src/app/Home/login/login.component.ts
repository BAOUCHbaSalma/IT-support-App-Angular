import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { FormBuilder, FormGroup } from '@angular/forms';

import { LoginRequest, Person } from '../../model/it-support';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  loginForm!:FormGroup
  
  constructor(private srv:LoginService,private fb:FormBuilder,private route:Router){}
  ngOnInit(): void {

    this.loginForm=this.fb.group({
      username:'',
      password:''
     })

    
  }
  loginMethod() {
    const login: LoginRequest= {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password,
    }
    this.srv.Login(login).subscribe((res: any) => {
      if (res && res.token) {
        console.log("login successs")
        localStorage.setItem("jwt", res.token)
      }
      this.route.navigateByUrl('equipements')

})
}
}
