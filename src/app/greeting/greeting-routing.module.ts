import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

import { GreetingComponent }   from './greeting.component';

const routes: Routes = [
    {
        path: '',
        component: GreetingComponent,
        data: {
            title: 'Greeting'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GreetingRoutingModule {}
