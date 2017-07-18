import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

import { PandSComponent }   from './pands.component';

const routes: Routes = [
    {
        path: '',
        component: PandSComponent,
        data: {
            title: 'Uni-Quick™ Movable Duct System'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PandSRoutingModule {}
