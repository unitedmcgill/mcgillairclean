import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

import { FfComponent }   from './ff.component';

const routes: Routes = [
    {
        path: '',
        component: FfComponent,
        data: {
            title: 'Fabric Filters | Baghouse Systems'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FfRoutingModule {}
