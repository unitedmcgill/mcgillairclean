import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

import { AcidGasComponent }   from './acidgas.component';

const routes: Routes = [
    {
        path: '',
        component: AcidGasComponent,
        data: {
            title: 'Acid Gas Control, Spray-Dry Scrubbers, Semi-Dry Scrubbers, Dry Reagent Injection Systems'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AcidGasRoutingModule {}
