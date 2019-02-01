import { HomeComponent } from './ui/home/home.component';
import { ProfilComponent } from './ui/profil/profil.component';
import { SchedulingComponent } from './ui/scheduling/scheduling.component';
import { CommunicationComponent } from './ui/communication/communication.component';
import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InformationComponent } from './ui/information/information.component';
import { LogoutComponent } from './ui/logout/logout.component';
import { LoginComponent } from './ui/login/login.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'profil', component: ProfilComponent},
  { path: 'scheduling', component: SchedulingComponent},
  { path: 'communication', component: CommunicationComponent},
  { path: 'information', component: InformationComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'login', component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
