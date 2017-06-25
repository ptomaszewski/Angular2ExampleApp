import { StartComponent } from './start.component';

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const ROUTES: Routes = [
  { path: '', component: StartComponent }
];

export const START_ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
