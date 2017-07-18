import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

import { RtoComponent }   from './rto.component';

const routes: Routes = [
    {
        path: '',
        component: RtoComponent,
        data: {
            title: 'Regenerative Thermal Oxidizers (RTOs) | ThermaGrid™'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RtoRoutingModule {}
