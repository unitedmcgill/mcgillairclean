import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

import { AboutUsComponent }   from './aboutus.component';

const routes: Routes = [
    {
        path: '',
        component: AboutUsComponent,
        data: {
            title: 'About Us'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AboutUsRoutingModule {}
