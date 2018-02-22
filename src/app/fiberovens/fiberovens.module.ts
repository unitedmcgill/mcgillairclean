import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { TabsModule }               from 'ngx-bootstrap/tabs';

import { FiberOvensComponent }       from './fiberovens.component';
import { FiberOvensRoutingModule }   from './fiberovens-routing.module';

@NgModule({
    imports: [
        FiberOvensRoutingModule,
        CommonModule,
        FormsModule,
        TabsModule.forRoot()
    ],
    declarations: [ 
        FiberOvensComponent 
    ]
})
export class FiberOvensModule { }
