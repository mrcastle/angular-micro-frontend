import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'flights',
    loadComponent: () =>
      loadRemoteModule('nav', './NavMenu').then((m) => m.NavMenuComponent),
  },
];
