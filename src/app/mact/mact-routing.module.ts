import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

import { MactComponent }   from './mact.component';

const routes: Routes = [
    {
        path: '',
        component: MactComponent,
        data: {
            title: 'McGill Boiler MACT Solutions'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MactRoutingModule {}
