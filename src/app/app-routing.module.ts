import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEquipmentComponent } from './add-equipment/add-equipment.component';
import { ListEquipmentComponent } from './list-equipment/list-equipment.component';
import { UpdateEquipmentComponent } from './update-equipment/update-equipment.component';
import { LoginComponent } from './Home/login/login.component';
import { AddFailureComponent } from './add-failure/add-failure.component';
import { FailureComponent } from './failure/failure.component';
import { UpdateFailureComponent } from './update-failure/update-failure.component';
import { AddTicketComponent } from './add-ticket/add-ticket.component';
import { ListTicketsUserComponent } from './list-tickets-user/list-tickets-user.component';
import { HomeComponent } from './Home/home/home.component';
import { DashboardComponent } from './Dash/dashboard/dashboard.component';

import { DashboardSupportTicketComponent } from './dashboard-support-ticket/dashboard-support-ticket.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { DashboardFailureComponent } from './dashboard-failure/dashboard-failure.component';
import { DashboardEmployeesComponent } from './dashboard-employees/dashboard-employees.component';
import { ListTicketsPendingComponent } from './list-tickets-pending/list-tickets-pending.component';
import { AssociateTicketComponent } from './associate-ticket/associate-ticket.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {
    path: 'dashboard', component: DashboardComponent, children: [
    {path: '', component: DashboardHomeComponent },
    {path:'tickets',component:DashboardSupportTicketComponent, children:[
      {path: '', component: ListTicketsPendingComponent },
      {path: 'update/:id', component: AssociateTicketComponent },
    ]},
    {path:'failures',component:DashboardFailureComponent},
    {path:'employees',component:DashboardEmployeesComponent},
    {path:'update/:id',component:UpdateEquipmentComponent}
    ]
  }
  // {path:"equipements",component:ListEquipmentComponent},
  // {path:"equipement",component:AddEquipmentComponent},
  // {path:"equipment/:id",component:UpdateEquipmentComponent},
  // {path:"failure",component:AddFailureComponent},
  // {path:"failures",component:FailureComponent},
  // {path:"failure/:id",component:UpdateFailureComponent},
  // {path:"ticket",component:AddTicketComponent},
  // {path:"tickets/:id",component:ListTicketsUserComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
