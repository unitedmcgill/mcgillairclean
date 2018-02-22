import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { TabsModule }               from 'ngx-bootstrap/tabs';

import { BoilersComponent }       from './boilers.component';
import { BoilersRoutingModule }   from './boilers-routing.module';

@NgModule({
    imports: [
        BoilersRoutingModule,
        CommonModule,
        FormsModule,
        TabsModule.forRoot()
    ],
    declarations: [ 
        BoilersComponent 
    ]
})
export class BoilersModule { }
