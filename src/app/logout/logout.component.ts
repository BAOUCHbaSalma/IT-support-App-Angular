import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent implements OnInit{
  constructor(private router : Router){}
  ngOnInit(): void {
    
  }

  check = false;
  logout(check : boolean) {
    if(check){
      localStorage.removeItem('jwtData');
    this.router.navigateByUrl('/fr');
    }
    else{
      console.log("wa hasan");
    }
    
  }
}
