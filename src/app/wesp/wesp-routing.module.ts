import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

import { WespComponent }   from './wesp.component';

const routes: Routes = [
    {
        path: '',
        component: WespComponent,
        data: {
            title: 'Wet Electrostatic Precipitators (WESPs)'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WespRoutingModule {}
