import { ResourceListComponent } from './resource-list.component';

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const ROUTES: Routes = [
  { path: '', component: ResourceListComponent }
];

export const RESOURCE_LIST_ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
