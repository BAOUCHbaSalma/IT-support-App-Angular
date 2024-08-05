import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Equipment } from '../model/it-support';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {
  urlApiUser="http://localhost:8080/user"
  urlApiAdmin="http://localhost:8080/admin"
  urlApiTechnician="http://localhost:8080/technician"
  urlApi="http://localhost:8080"

  constructor(private http:HttpClient) { }

  public addEquipement(equipment:Equipment){
    return this.http.post(`${this.urlApiAdmin}/equipement`,equipment)
  }
  public showEquipements(){
    return this.http.get(`${this.urlApiAdmin}/equipments`)
  }
  public deleteEquipement(id:number){
    return this.http.delete(`${this.urlApiAdmin}/equipment/${id}`)
  }
}
