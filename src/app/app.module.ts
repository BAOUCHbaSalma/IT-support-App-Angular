import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { IntercepteurService } from './service/intercepteur-service.service';
import { AddEquipmentComponent } from './add-equipment/add-equipment.component';
import { ListEquipmentComponent } from './list-equipment/list-equipment.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateEquipmentComponent } from './update-equipment/update-equipment.component';
import { LoginComponent } from './Home/login/login.component';
import { HomeComponent } from './Home/home/home.component';
import { AddFailureComponent } from './add-failure/add-failure.component';
import { FailureComponent } from './failure/failure.component';
import { UpdateFailureComponent } from './update-failure/update-failure.component';
import { AddTicketComponent } from './add-ticket/add-ticket.component';
import { ListTicketsUserComponent } from './list-tickets-user/list-tickets-user.component';
import { DashboardComponent } from './Dash/dashboard/dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { LogoutComponent } from './logout/logout.component';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { DashboardSupportTicketComponent } from './dashboard-support-ticket/dashboard-support-ticket.component';
import { ListAllTicketsComponent } from './list-all-tickets/list-all-tickets.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { ListTicketsResolvedComponent } from './list-tickets-resolved/list-tickets-resolved.component';
import { ListTicketsProgressComponent } from './list-tickets-progress/list-tickets-progress.component';
import { ListTicketsPendingComponent } from './list-tickets-pending/list-tickets-pending.component';
import { DashboardFailureComponent } from './dashboard-failure/dashboard-failure.component';
import { DashboardEmployeesComponent } from './dashboard-employees/dashboard-employees.component';
import { ListEmployeesComponent } from './list-employees/list-employees.component';
import { AssociateTicketComponent } from './associate-ticket/associate-ticket.component';
import { DashUserComponent } from './dash-user/dash-user.component';
import { DashTechnicianComponent } from './dash-technician/dash-technician.component';
import { ListTicketsTechnicianProgressComponent } from './list-tickets-technician-progress/list-tickets-technician-progress.component';
import { ListTicketsTechnicianResolvedComponent } from './list-tickets-technician-resolved/list-tickets-technician-resolved.component';

import { UpdateTicketsTechnicianComponent } from './update-tickets-technician/update-tickets-technician.component';
import { ListFailureHistoryComponent } from './list-failure-history/list-failure-history.component';
import { AddPersonComponent } from './add-person/add-person.component';

@NgModule({
  declarations: [
    AppComponent,
    AddEquipmentComponent,
    ListEquipmentComponent,
    UpdateEquipmentComponent,
    LoginComponent,
    HomeComponent,
    AddFailureComponent,
    FailureComponent,
    UpdateFailureComponent,
    AddTicketComponent,
    ListTicketsUserComponent,
    DashboardComponent,
    MenuComponent,
    LogoutComponent,
    DashboardHomeComponent,
    DashboardSupportTicketComponent,
    ListAllTicketsComponent,
    ListTicketsResolvedComponent,
    ListTicketsProgressComponent,
    ListTicketsPendingComponent,
    DashboardFailureComponent,
    DashboardEmployeesComponent,
    ListEmployeesComponent,
    AssociateTicketComponent,
    DashUserComponent,
    DashTechnicianComponent,
    ListTicketsTechnicianProgressComponent,
    ListTicketsTechnicianResolvedComponent,
    UpdateTicketsTechnicianComponent,
    ListFailureHistoryComponent,
    AddPersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [
    provideClientHydration(),
    { provide: HTTP_INTERCEPTORS, useClass: IntercepteurService, multi: true },
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
