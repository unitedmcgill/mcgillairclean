import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

import { FilesComponent }   from './files.component';

const routes: Routes = [
    {
        path: '',
        component: FilesComponent,
        data: {
            title: 'Files'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FilesRoutingModule {}
