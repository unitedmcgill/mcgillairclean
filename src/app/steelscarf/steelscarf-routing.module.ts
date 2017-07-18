import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

import { SteelScarfComponent }   from './steelscarf.component';

const routes: Routes = [
    {
        path: '',
        component: SteelScarfComponent,
        data: {
            title: 'Steel Scarfing'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SteelScarfRoutingModule {}
