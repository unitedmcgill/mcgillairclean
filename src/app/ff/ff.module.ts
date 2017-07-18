import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { TabsModule }               from 'ng2-bootstrap/tabs';

import { FfComponent }       from './ff.component';
import { FfRoutingModule }   from './ff-routing.module';

@NgModule({
    imports: [
        FfRoutingModule,
        CommonModule,
        FormsModule,
        TabsModule.forRoot()
    ],
    declarations: [ 
        FfComponent 
    ]
})
export class FfModule { }
