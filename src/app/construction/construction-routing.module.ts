import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

import { ConstructionComponent }   from './construction.component';

const routes: Routes = [
    {
        path: '',
        component: ConstructionComponent,
        data: {
            title: 'Construction'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ConstructionRoutingModule {}
