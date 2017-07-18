import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

import { CementKilnsComponent }   from './cementkilns.component';

const routes: Routes = [
    {
        path: '',
        component: CementKilnsComponent,
        data: {
            title: 'Cement Kilns'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CementKilnsRoutingModule {}
