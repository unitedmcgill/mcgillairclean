import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { TabsModule }               from 'ngx-bootstrap/tabs';

import { DenoxComponent }       from './denox.component';
import { DenoxRoutingModule }   from './denox-routing.module';

@NgModule({
    imports: [
        DenoxRoutingModule,
        CommonModule,
        FormsModule,
        TabsModule.forRoot()
    ],
    declarations: [ 
        DenoxComponent 
    ]
})
export class DenoxModule { }
