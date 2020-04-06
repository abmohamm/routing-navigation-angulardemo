import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { ManageCrisisComponent } from './manage-crisis/manage-crisis.component';
import { ManageHeroesComponent } from './manage-heroes/manage-heroes.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
                  AdminDashboardComponent,
                  AdminComponent,
                  ManageCrisisComponent,
                  ManageHeroesComponent
                ],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
