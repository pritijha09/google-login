import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path: '', redirectTo:'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'mainpage', component: MainPageComponent, canActivate: [AuthGuardService]}, // only accessible if authorised
    {path: '**', component: LoginComponent}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
