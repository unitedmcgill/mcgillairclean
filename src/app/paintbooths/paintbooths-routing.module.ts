import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

import { PaintBoothsComponent }   from './paintbooths.component';

const routes: Routes = [
    {
        path: '',
        component: PaintBoothsComponent,
        data: {
            title: 'Double-Wall Round/Flat Oval Duct and Fittings'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PaintBoothsRoutingModule {}
