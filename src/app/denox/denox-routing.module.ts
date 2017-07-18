import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

import { DenoxComponent }   from './denox.component';

const routes: Routes = [
    {
        path: '',
        component: DenoxComponent,
        data: {
            title: 'DeNOx Selective Catalytic Reduction (SCR) Reactors'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DenoxRoutingModule {}
