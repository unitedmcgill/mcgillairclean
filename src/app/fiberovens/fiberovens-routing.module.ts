import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

import { FiberOvensComponent }   from './fiberovens.component';

const routes: Routes = [
    {
        path: '',
        component: FiberOvensComponent,
        data: {
            title: 'Fiberglass Ovens'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FiberOvensRoutingModule {}
