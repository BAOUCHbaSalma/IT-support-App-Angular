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

@NgModule({
  declarations: [
    AppComponent,
    AddEquipmentComponent,
    ListEquipmentComponent,
    UpdateEquipmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(),
    //{ provide: HTTP_INTERCEPTORS, useClass: IntercepteurService, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
