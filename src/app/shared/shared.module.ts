import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  DxBulletModule,
  DxButtonModule,
  DxCheckBoxModule,
  DxDataGridModule,
  DxDrawerModule,
  DxDropDownButtonModule,
  DxFormModule,
  DxListModule,
  DxNumberBoxModule,
  DxSelectBoxModule,
  DxTabPanelModule,
  DxTemplateModule,
  DxTextBoxModule,
  DxToolbarModule,
  DxTooltipModule,
  DxValidatorModule,
} from 'devextreme-angular';
import { PermissionGuard } from './../core/guards/permission.guard';
import { StickySidebarComponent } from './components/sticky-sidebar/sticky-sidebar.component';
import { AccordionDirective } from './directives/accordion.directive';
import { HasAccessMenuDirective } from './directives/has-access-menu.directive';
import { HasAccessDirective } from './directives/has-access.directive';
import { HasPreferenceDirective } from './directives/has-preference.directive';
import { NumbersDirective } from './directives/numbers.directive';
import { ScrollSpyDirective } from './directives/scroll-spy.directive';
import { CamelCasePipe } from './pipes/camel-case/camel-case.pipe';
import { DotsPipe } from './pipes/dotsPipe/dots.pipe';
import { PadEndPipe } from './pipes/pad-end-pipe/pad-end.pipe';
import { PadStartPipe } from './pipes/pad-start-pipe/pad-start.pipe';
import { StringFormatPipe } from './pipes/string-format/string-format.pipe';
import { TranslateModule } from './translate.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    TranslateModule,
    DxButtonModule,
    DxDataGridModule,
    DxTemplateModule,
    DxBulletModule,
    DxDropDownButtonModule,
    DxToolbarModule,
    DxTooltipModule,
    DxTemplateModule,
    DxDataGridModule,
    DxSelectBoxModule,
    DxCheckBoxModule,
    DxTabPanelModule,
    DxFormModule,
    DxButtonModule,
    DxNumberBoxModule,
    DxTextBoxModule,
    DxValidatorModule,
    DxDrawerModule,
    DxListModule,
  ],
  declarations: [
    HasAccessDirective,
    NumbersDirective,
    DotsPipe,
    AccordionDirective,
    ScrollSpyDirective,
    HasPreferenceDirective,
    StickySidebarComponent,
    StringFormatPipe,
    HasAccessMenuDirective,
    PadStartPipe,
    PadEndPipe,
    CamelCasePipe,
  ],
  exports: [
    DxFormModule,
    FormsModule,
    ReactiveFormsModule,
    HasAccessDirective,
    NumbersDirective,
    DotsPipe,
    AccordionDirective,
    ScrollSpyDirective,
    HasPreferenceDirective,
    StickySidebarComponent,
    StringFormatPipe,
    HasAccessMenuDirective,
    TranslateModule,
    PadStartPipe,
    PadEndPipe,
    DxDropDownButtonModule,
    DxToolbarModule,
    DxTooltipModule,
    DxTemplateModule,
    DxDataGridModule,
    DxSelectBoxModule,
    DxCheckBoxModule,
    CamelCasePipe,
    DxTabPanelModule,
    DxButtonModule,
    DxNumberBoxModule,
    DxTextBoxModule,
    DxValidatorModule,
    DxDrawerModule,
    DxListModule,
  ],
  providers: [PermissionGuard],
})
export class SharedModule {}
