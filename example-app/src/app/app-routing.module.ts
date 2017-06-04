import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {
    path: 'start',
    pathMatch: 'prefix',
    loadChildren: './modules/start#StartModule'
  },
  {
    path: 'user-list',
    pathMatch: 'prefix',
    loadChildren: './modules/user-list#UserListModule'
  },
  {
    path: 'resource-list',
    pathMatch: 'prefix',
    loadChildren: './modules/resource-list#ResourceListModule'
  },
  // {
  //   path: '**',
  //   pathMatch: 'full',
  //   redirectTo: 'start'
  // }
];

export const APP_ROUTING: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
