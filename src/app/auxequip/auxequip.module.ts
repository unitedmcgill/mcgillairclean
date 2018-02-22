import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { TabsModule }               from 'ngx-bootstrap/tabs';

import { AuxEquipComponent }       from './auxequip.component';
import { AuxEquipRoutingModule }   from './auxequip-routing.module';

@NgModule({
    imports: [
        AuxEquipRoutingModule,
        CommonModule,
        FormsModule,
        TabsModule.forRoot()
    ],
    declarations: [ 
        AuxEquipComponent 
    ]
})
export class AuxEquipModule { }
