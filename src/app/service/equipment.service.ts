import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Equipment } from '../model/it-support';
import { Observable, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {
 
  urlApiUser="http://localhost:8080/user"
  urlApiAdmin="http://localhost:8080/admin"
  urlApiTechnician="http://localhost:8080/technician"
  urlApi="http://localhost:8080"

  private equipmentSubject = new Subject<Equipment[]>(); 

  constructor(private http:HttpClient) { }

  public addEquipement(equipment:Equipment){
    return this.http.post(`${this.urlApiAdmin}/equipement`,equipment).pipe(tap(()=>this.refreshEquipments()))
  }
  public showEquipements():Observable<Equipment[]>{
    return this.http.get<Equipment[]>(`${this.urlApiAdmin}/equipments`)
  }
  public deleteEquipement(id:number){
    return this.http.delete(`${this.urlApiAdmin}/equipment/${id}`)
  }
  public updateEquipement(id:number,equipement:Equipment){
    return this.http.put(`${this.urlApiAdmin}/equipment/update/${id}`,equipement)
  }
  public findById(id:number){
    return this.http.get(`${this.urlApi}/equipement/${id}`)

  }
  public findByIdUser(id:any):Observable<Equipment[]>{
    return this.http.get<Equipment[]>(`${this.urlApiUser}/equipments/${id}`)
  }
  private refreshEquipments(){
    this.showEquipements().subscribe(equipments=>{
      this.equipmentSubject.next(equipments)
  })}

    public getEquipments(): Observable<Equipment[]> {
      return this.equipmentSubject.asObservable();
    }

  }

