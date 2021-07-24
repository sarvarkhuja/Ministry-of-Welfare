import { SharedModule } from '@shared/shared.module';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { AuthRoutes } from './auth.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './components/auth/auth.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, AuthRoutes, SharedModule],
  declarations: [
    AuthComponent,
    SignInComponent,
  ],
  providers: [
  ],
})
export class AuthModule { }
