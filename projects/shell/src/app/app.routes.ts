import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {
    path: 'mfe-one',
    loadComponent: () =>
      loadRemoteModule('mfe-one', './RemoteView').then(
        (m) => m.RemoteViewComponent
      ),
  },
  {
    path: 'mfe-two',
    loadComponent: () =>
      loadRemoteModule('mfe-two', './RemoteView').then(
        (m) => m.RemoteViewComponent
      ),
  },
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
];
