import { Component, OnInit } from '@angular/core';
import { EquipmentService } from '../service/equipment.service';

@Component({
  selector: 'app-list-equipment',
  templateUrl: './list-equipment.component.html',
  styleUrl: './list-equipment.component.css'
})
export class ListEquipmentComponent implements OnInit{
  Listequipment:any

  constructor(private srv:EquipmentService){}

  ngOnInit(): void {
    this.srv.showEquipements().subscribe(value=>{
      this.Listequipment=value
    }) 
  }
  deleteEquipement(id:number){
    this.srv.deleteEquipement(id).subscribe(()=>{
      this.ngOnInit()
    })
  }

}
