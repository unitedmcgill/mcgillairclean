import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { TabsModule }               from 'ngx-bootstrap/tabs';

import { RtoComponent }       from './rto.component';
import { RtoRoutingModule }   from './rto-routing.module';

@NgModule({
    imports: [
        RtoRoutingModule,
        CommonModule,
        FormsModule,
        TabsModule.forRoot()
    ],
    declarations: [ 
        RtoComponent 
    ]
})
export class RtoModule { }
