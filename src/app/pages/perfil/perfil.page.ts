import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: false,
})
export class PerfilPage implements OnInit {
  userProfile = {
    username: 'GaelAlejandro2207',
    tag: 'gael2207',
    avatar: 'assets/images/teto.png',
    joinDate: '31 ene 2023',
    connections: [
      {
        platform: 'elcuacharaxdlol',
        icon: 'assets/images/teto.png',
        verified: true
      }
    ],
    status: 'offline',
    note: ''
  };

  selectedTab = 'about';

  constructor() { }

  ngOnInit() {
  }

  setTab(tab: string) {
    this.selectedTab = tab;
  }

  addNote() {
    // Implement note adding functionality
  }

  editProfile() {
    // Implement edit profile functionality
  }

  addStatus() {
    // Implement status adding functionality
  }
}