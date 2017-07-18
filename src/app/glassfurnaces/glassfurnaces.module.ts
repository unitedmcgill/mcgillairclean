import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { TabsModule }               from 'ng2-bootstrap/tabs';

import { GlassFurnacesComponent }       from './glassfurnaces.component';
import { GlassFurnacesRoutingModule }   from './glassfurnaces-routing.module';

@NgModule({
    imports: [
        GlassFurnacesRoutingModule,
        CommonModule,
        FormsModule,
        TabsModule.forRoot()
    ],
    declarations: [ 
        GlassFurnacesComponent 
    ]
})
export class GlassFurnacesModule { }
