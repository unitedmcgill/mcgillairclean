import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

import { MobileTestComponent }   from './mobiletest.component';

const routes: Routes = [
    {
        path: '',
        component: MobileTestComponent,
        data: {
            title: 'Mobile Testing'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MobileTestRoutingModule {}
