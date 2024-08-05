import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEquipmentComponent } from './add-equipment/add-equipment.component';
import { ListEquipmentComponent } from './list-equipment/list-equipment.component';
import { UpdateEquipmentComponent } from './update-equipment/update-equipment.component';

const routes: Routes = [
  {path:"",component:ListEquipmentComponent},
  {path:"equipement",component:AddEquipmentComponent},
  {path:"equipment/:id",component:UpdateEquipmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
