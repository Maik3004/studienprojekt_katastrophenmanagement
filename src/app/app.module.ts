import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { HomeComponent } from './ui/home/home.component';
import { ProfilComponent } from './ui/profil/profil.component';
import { CommunicationComponent } from './ui/communication/communication.component';
import { InformationComponent } from './ui/information/information.component';
import { LogoutComponent } from './ui/logout/logout.component';
import { LoginComponent } from './ui/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfilComponent,
    CommunicationComponent,
    InformationComponent,
    LogoutComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
