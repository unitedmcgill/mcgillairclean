import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

import { PandSComponent }   from './pands.component';

const routes: Routes = [
    {
        path: '',
        component: PandSComponent,
        data: {
            title: 'Parts and Service - Preventive Maintenance'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PandSRoutingModule {}
