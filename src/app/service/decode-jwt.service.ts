import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { jwtDecode } from 'jwt-decode';
import { PersonService } from './person.service';

@Injectable({
  providedIn: 'root'
})
export class DecodejwtService {
  token: string | null = null;

  constructor(private srp:PersonService) {

    if (typeof localStorage !== 'undefined') {
      this.token = localStorage.getItem('jwt');
    }
  }
  decodeToken(token: string ) {
    return jwtDecode(token);
  }
  getUsernameFromToken(token: any) :any{
    const decodedToken = this.decodeToken(token);
    return decodedToken.sub;
  }
  getRoleFromToken(token: any) :any{
    const decodedToken = this.decodeToken(token);
    return decodedToken.sub;
  }
  getIdByUsername(token:any) {
    const username = this.getUsernameFromToken(token);
    return this.srp.getIdByUsername(username);
  }
}
