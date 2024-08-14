import { Component, OnInit } from '@angular/core';
import { EquipmentService } from '../service/equipment.service';
import { Equipment } from '../model/it-support';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list-equipment',
  templateUrl: './list-equipment.component.html',
  styleUrl: './list-equipment.component.css'
})
export class ListEquipmentComponent implements OnInit{
  Listequipment!:Equipment[]
  dataSource = new MatTableDataSource<Equipment>();

  constructor(private srv:EquipmentService){}

  ngOnInit(): void {
    this.srv.getEquipments().subscribe(equipments => {
      this.dataSource.data = equipments;
    });
    this.srv.showEquipements().subscribe(value=>{
      this.Listequipment=value
      this.dataSource.data = this.Listequipment;
    }) 
  }
  deleteEquipement(id:number){
    this.srv.deleteEquipement(id).subscribe(()=>{
      this.ngOnInit()
    })
  }
  displayedColumns: string[] = ['Name', 'Status','Insertion Date', 'User', 'delete', 'update'];

}
