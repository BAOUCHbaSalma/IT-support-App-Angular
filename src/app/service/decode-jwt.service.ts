import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { jwtDecode } from 'jwt-decode';
import { PersonService } from './person.service';
import { JwtPayload } from '../model/it-support';

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
  // decodeToken(token: string ) {
  //   return jwtDecode(token);
  // }
  private decodeToken(token: string): JwtPayload {
    return jwtDecode(token) as JwtPayload;
  }
  getUsernameFromToken(token: any) :any{
    const decodedToken = this.decodeToken(token);
    return decodedToken.sub;
  }
  getRoleFromToken(token: any) :any{
    const decodedToken = this.decodeToken(token);
    return decodedToken.roles;
  }
  getIdByUsername(token:any) {
    const username = this.getUsernameFromToken(token);
    return this.srp.getIdByUsername(username);
  }
  
  isLoggedIn(): boolean {
    return this.token !== null;
  }
}
