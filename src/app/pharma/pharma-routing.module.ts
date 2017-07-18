import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

import { PharmaComponent }   from './pharma.component';

const routes: Routes = [
    {
        path: '',
        component: PharmaComponent,
        data: {
            title: 'Pharmaceuticals'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PharmaRoutingModule {}
