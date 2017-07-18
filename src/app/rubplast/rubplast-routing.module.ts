import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

import { RubPlastComponent }   from './rubplast.component';

const routes: Routes = [
    {
        path: '',
        component: RubPlastComponent,
        data: {
            title: 'Rubber & Plastics'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RubPlastRoutingModule {}
