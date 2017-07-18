import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { TabsModule }               from 'ng2-bootstrap/tabs';

import { AcidGasComponent }       from './acidgas.component';
import { AcidGasRoutingModule }   from './acidgas-routing.module';

@NgModule({
    imports: [
        AcidGasRoutingModule,
        CommonModule,
        FormsModule,
        TabsModule.forRoot()
    ],
    declarations: [ 
        AcidGasComponent 
    ]
})
export class AcidGasModule { }
