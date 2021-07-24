import { HomeServicePlanMenuComponent } from './components/home-service-plan-menu/home-service-plan-menu.component';
import { HomeMaintenanceMenuComponent } from './components/home-maintenance-menu/home-maintenance-menu.component';
import { HomeMainMenuComponent } from './components/home-main-menu/home-main-menu.component';
import { SharedModule } from './../../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeIndexComponent } from './home-index/home-index.component';
import { HomeEmployeesMenuComponent } from './components/home-employees-menu/home-employees-menu.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
        children: [
          { path: '', component: HomeMainMenuComponent },
          {
            path: 'employees-menu',
            component: HomeEmployeesMenuComponent,
            data: { breadcrumbs: { text: 'Employees' } },
          },
          {
            path: 'maintenance-menu',
            component: HomeMaintenanceMenuComponent,
            data: { breadcrumbs: { text: 'Maintenance' } },
          },
          {
            path: 'service-plan-menu',
            component: HomeServicePlanMenuComponent,
            data: { breadcrumbs: { text: 'Service Plan' } },
          },
        ],
      },
    ]),
  ],
  declarations: [
    HomeComponent,
    HomeIndexComponent,
    HomeMainMenuComponent,
    HomeEmployeesMenuComponent,
    HomeMaintenanceMenuComponent,
    HomeServicePlanMenuComponent,
  ],
})
export class HomeModule {}
