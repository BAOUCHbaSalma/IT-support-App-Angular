import { Component, OnInit } from '@angular/core';
import { DecodejwtService } from '../service/decode-jwt.service';

@Component({
  selector: 'app-dash-user',
  templateUrl: './dash-user.component.html',
  styleUrl: './dash-user.component.css'
})
export class DashUserComponent implements OnInit{
  idUser:any
  constructor(private srv:DecodejwtService){}
  ngOnInit(): void {

    if (typeof localStorage !== 'undefined') {
      const token = localStorage.getItem('jwt');
      if (token) {
        this.srv.getIdByUsername(token).subscribe(id=>{
          this.idUser=id
        })

       }

}
}}
