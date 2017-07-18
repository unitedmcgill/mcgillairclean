import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

import { GlassFurnacesComponent }   from './glassfurnaces.component';

const routes: Routes = [
    {
        path: '',
        component: GlassFurnacesComponent,
        data: {
            title: 'Glass Furnaces'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GlassFurnacesRoutingModule {}
