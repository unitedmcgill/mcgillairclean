import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

import { AuxEquipComponent }   from './auxequip.component';

const routes: Routes = [
    {
        path: '',
        component: AuxEquipComponent,
        data: {
            title: 'Auxiliary Equipment: Control Systems, Evaporative Coolers, Recycling Systems, Breeching, and Stacks'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuxEquipRoutingModule {}
