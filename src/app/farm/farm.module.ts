import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { FarmRoutingModule } from './farm-routing.module';
import { FarmerComponent } from './farmer/farmer.component';
import { RouteReuseStrategy } from '@angular/router';
import { FarmComponent } from './farm/farm.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SwiperModule } from 'swiper/angular';
import { FarmerDetailsComponent } from './farmer-details/farmer-details.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FarmComponent,
    DashboardComponent,
    FarmerComponent,
    FarmerDetailsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule.forRoot(),
    FarmRoutingModule,
    SwiperModule

  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
})
export class FarmModule { }
