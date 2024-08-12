import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Erole, LoginRequest, Person } from '../../model/it-support';
import { Router } from '@angular/router';
import { DecodejwtService } from '../../service/decode-jwt.service';
import { PersonService } from '../../service/person.service';
import { SupportTicketService } from '../../service/support-ticket.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  loginForm!:FormGroup
  username!:string
  
  constructor(private srv:LoginService,private fb:FormBuilder,private route:Router,private srvd:DecodejwtService,private srvp:PersonService,private srvt:SupportTicketService){}
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
       this.username= this.srvd.getUsernameFromToken(res.token)
       this.srvp.findByUsername(this.username).subscribe((re:any)=>{
        if(re.role==Erole.ADMIN){
          this.route.navigateByUrl("dashboard")
        }else if(re.role==Erole.TECHNICIAN){
          this.route.navigateByUrl(`dashtechnician/${re.id}`)

        }else{
          this.route.navigateByUrl(`dashuser/${re.id}`)
        }
       })

        


      }
      

})
}
}
