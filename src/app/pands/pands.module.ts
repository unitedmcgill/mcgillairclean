import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { TabsModule }               from 'ngx-bootstrap/tabs';

import { PandSComponent }       from './pands.component';
import { PandSRoutingModule }   from './pands-routing.module';

@NgModule({
    imports: [
        PandSRoutingModule,
        CommonModule,
        FormsModule,
        TabsModule.forRoot()
    ],
    declarations: [ 
        PandSComponent 
    ]
})
export class PandSModule { }
