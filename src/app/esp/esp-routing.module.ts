import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

import { EspComponent }   from './esp.component';

const routes: Routes = [
    {
        path: '',
        component: EspComponent,
        data: {
            title: 'Dry Electrostatic Precipitators (ESPs)'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EspRoutingModule {}
