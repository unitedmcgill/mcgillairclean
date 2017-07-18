import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

import { AlumCastComponent }   from './alumcast.component';

const routes: Routes = [
    {
        path: '',
        component: AlumCastComponent,
        data: {
            title: 'Aluminum Casting'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AlumCastRoutingModule {}
