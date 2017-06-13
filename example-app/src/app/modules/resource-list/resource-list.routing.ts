console.log('routes');

import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './components/table/table.component';
import { ResourceListComponent } from './resource-list.component';
import { ModuleWithProviders } from '@angular/core';

const resourceListRoutes: Routes = [
    {
        path: '',
        component: ResourceListComponent,
        children: [
            {
                path: '',
                component: TableComponent
            },
            {
                path: ':page',
                component: TableComponent
            }
        ]
    }
];

export const resourceListRouting: ModuleWithProviders = RouterModule.forChild(resourceListRoutes);