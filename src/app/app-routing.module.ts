import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './modules/resource-list/components/table/table.component';
import { RequestErrorComponent } from './components/request-error/request-error.component';


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
  {
    path: 'request-error',
    pathMatch: 'prefix',
    component: RequestErrorComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'start'
  }
];

export const APP_ROUTING: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
