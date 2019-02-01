import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

loggedUser: false;
loggedAdmin = false;
headerComponent: string[] = [
  'home',
  'profil',
  'scheduling',
  'communication',
  'information',
  'logout'];

headerDiscricption: string[] = [
  'Katastrophenmanagement',
  'Profil',
  'Planung',
  'Kommunikation',
  'Information',
  'Log-Out'];

  constructor() { }

  ngOnInit() {
  }

}
