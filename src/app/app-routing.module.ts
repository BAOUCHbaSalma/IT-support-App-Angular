import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEquipmentComponent } from './add-equipment/add-equipment.component';
import { ListEquipmentComponent } from './list-equipment/list-equipment.component';
import { UpdateEquipmentComponent } from './update-equipment/update-equipment.component';
import { LoginComponent } from './Home/login/login.component';
import { AddFailureComponent } from './add-failure/add-failure.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"equipements",component:ListEquipmentComponent},
  {path:"equipement",component:AddEquipmentComponent},
  {path:"equipment/:id",component:UpdateEquipmentComponent},
  {path:"failure",component:AddFailureComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
