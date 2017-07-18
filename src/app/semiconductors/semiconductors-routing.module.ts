import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

import { SemiconductorsComponent }   from './semiconductors.component';

const routes: Routes = [
    {
        path: '',
        component: SemiconductorsComponent,
        data: {
            title: 'Leak Detective® Test Equipment'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SemiconductorsRoutingModule {}
