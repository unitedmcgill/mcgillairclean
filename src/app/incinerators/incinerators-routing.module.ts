import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

import { IncineratorsComponent }   from './incinerators.component';

const routes: Routes = [
    {
        path: '',
        component: IncineratorsComponent,
        data: {
            title: 'Incinerators'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class IncineratorsRoutingModule {}
