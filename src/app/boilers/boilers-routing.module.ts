import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

import { BoilersComponent }   from './boilers.component';

const routes: Routes = [
    {
        path: '',
        component: BoilersComponent,
        data: {
            title: 'Boilers'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BoilersRoutingModule {}
