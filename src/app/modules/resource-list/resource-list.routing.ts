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
                redirectTo: '1'
            },
            {
                path: ':page',
                component: TableComponent
            }
        ]
    }
];

export const resourceListRouting: ModuleWithProviders = RouterModule.forChild(resourceListRoutes);
