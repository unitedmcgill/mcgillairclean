import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

import { ToolsComponent }   from './tools.component';

const routes: Routes = [
    {
        path: '',
        component: ToolsComponent,
        data: {
            title: 'Tech Tools'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ToolsRoutingModule {}
