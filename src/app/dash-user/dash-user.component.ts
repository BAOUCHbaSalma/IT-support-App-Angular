import { Component, OnInit } from '@angular/core';
import { DecodejwtService } from '../service/decode-jwt.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash-user',
  templateUrl: './dash-user.component.html',
  styleUrl: './dash-user.component.css'
})
export class DashUserComponent implements OnInit{
  idUser:any
  constructor(private srv:DecodejwtService , private router : Router){}
  ngOnInit(): void {

    if (typeof localStorage !== 'undefined') {
      const token = localStorage.getItem('jwt');
      if (token) {
        this.srv.getIdByUsername(token).subscribe(id=>{
          this.idUser=id
        })

       }

}
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
