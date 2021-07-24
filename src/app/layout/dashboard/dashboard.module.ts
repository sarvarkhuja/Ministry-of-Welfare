import { DxTreeViewModule } from 'devextreme-angular';
import { MenuComponent } from './components/menu/menu.component';
import { BreadcrumbModule } from './../../modules/breadcrumb/breadcrumb.module';
import { HeaderComponent } from './components/header/header.component';
import { DashboardRoutes } from './dashboard.routing';
import { SharedModule } from './../../shared/shared.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, DashboardRoutes, SharedModule, BreadcrumbModule, DxTreeViewModule],
  declarations: [DashboardComponent, HeaderComponent, FooterComponent, MenuComponent],
  providers: [],
})
export class DashboardModule {}
