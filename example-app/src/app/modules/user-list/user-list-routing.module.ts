import { UserListComponent } from './user-list.component';

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const ROUTES: Routes = [
  { path: '', component: UserListComponent }
];

export const USER_LIST_ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
