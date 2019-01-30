import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

import { CatFiltersComponent }   from './catfilters.component';

const routes: Routes = [
    {
        path: '',
        component: CatFiltersComponent,
        data: {
            title: 'Catalytic Filters'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CatFiltersRoutingModule {}
