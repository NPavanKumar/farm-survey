import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FarmerComponent } from './farmer/farmer.component';
import { IdentificationComponent } from './identification/identification.component';
import { FarmComponent } from './farm/farm.component';
import { FarmerDetailsComponent } from './farmer-details/farmer-details.component';


const routes: Routes = [
  { path: '', component: FarmComponent, children:
  [
    { path: 'farmers', component: FarmerComponent },
    { path: 'farmer-details/:id', component: FarmerDetailsComponent },
    { path: 'identification', component: IdentificationComponent },
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmRoutingModule { }
