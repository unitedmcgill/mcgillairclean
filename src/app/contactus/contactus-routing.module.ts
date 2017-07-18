import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

import { ContactUsComponent }   from './contactus.component';

const routes: Routes = [
    {
        path: '',
        component: ContactUsComponent,
        data: {
            title: 'ContactUs'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ContactUsRoutingModule {}
