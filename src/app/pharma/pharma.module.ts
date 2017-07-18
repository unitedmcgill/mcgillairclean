import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { TabsModule }               from 'ng2-bootstrap/tabs';

import { PharmaComponent }       from './pharma.component';
import { PharmaRoutingModule }   from './pharma-routing.module';

@NgModule({
    imports: [
        PharmaRoutingModule,
        CommonModule,
        FormsModule,
        TabsModule.forRoot()
    ],
    declarations: [ 
        PharmaComponent 
    ]
})
export class PharmaModule { }
