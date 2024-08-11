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
    ListTicketsPendingComponent
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
