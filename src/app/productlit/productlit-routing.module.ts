import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

import { ProductLitComponent }   from './productlit.component';

const routes: Routes = [
    {
        path: '',
        component: ProductLitComponent,
        data: {
            title: 'Product Literature'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductLitRoutingModule {}
