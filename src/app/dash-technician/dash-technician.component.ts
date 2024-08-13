import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash-technician',
  templateUrl: './dash-technician.component.html',
  styleUrl: './dash-technician.component.css'
})
export class DashTechnicianComponent implements OnInit{
  constructor(private router : Router){}
  ngOnInit(): void {
    
  }
  check = false;
  logout(check : boolean) {
    if(check){
      localStorage.removeItem('jwt');
      this.router.navigateByUrl('');
    }
    else{
      console.log("wa hasan");
    }
    
  }
}
