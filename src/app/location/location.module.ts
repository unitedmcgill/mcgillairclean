import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { TabsModule }               from 'ng2-bootstrap/tabs';

import { LocationComponent }       from './location.component';
import { LocationRoutingModule }   from './location-routing.module';

@NgModule({
    imports: [
        LocationRoutingModule,
        CommonModule,
        FormsModule,
        TabsModule.forRoot()
    ],
    declarations: [ 
        LocationComponent 
    ]
})
export class LocationModule { }
