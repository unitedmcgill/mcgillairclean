import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { TabsModule }               from 'ng2-bootstrap/tabs';

import { EspComponent }       from './esp.component';
import { EspRoutingModule }   from './esp-routing.module';

@NgModule({
    imports: [
        EspRoutingModule,
        CommonModule,
        FormsModule,
        TabsModule.forRoot()
    ],
    declarations: [ 
        EspComponent 
    ]
})
export class EspModule { }
