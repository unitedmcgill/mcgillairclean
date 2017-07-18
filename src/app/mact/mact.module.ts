import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { TabsModule }               from 'ng2-bootstrap/tabs';

import { MactComponent }       from './mact.component';
import { MactRoutingModule }   from './mact-routing.module';

@NgModule({
    imports: [
        MactRoutingModule,
        CommonModule,
        FormsModule,
        TabsModule.forRoot()
    ],
    declarations: [ 
        MactComponent 
    ]
})
export class MactModule { }
