import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { TabsModule }               from 'ngx-bootstrap/tabs';

import { WespComponent }       from './wesp.component';
import { WespRoutingModule }   from './wesp-routing.module';

@NgModule({
    imports: [
        WespRoutingModule,
        CommonModule,
        FormsModule,
        TabsModule.forRoot()
    ],
    declarations: [ 
        WespComponent 
    ]
})
export class WespModule { }
