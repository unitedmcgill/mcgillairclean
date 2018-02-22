import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { TabsModule }               from 'ngx-bootstrap/tabs';

import { SemiconductorsComponent }       from './semiconductors.component';
import { SemiconductorsRoutingModule }   from './semiconductors-routing.module';

@NgModule({
    imports: [
        SemiconductorsRoutingModule,
        CommonModule,
        FormsModule,
        TabsModule.forRoot()
    ],
    declarations: [ 
        SemiconductorsComponent 
    ]
})
export class SemiconductorsModule { }
