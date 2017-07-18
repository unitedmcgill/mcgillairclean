import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { TabsModule }               from 'ng2-bootstrap/tabs';

import { SteelScarfComponent }       from './steelscarf.component';
import { SteelScarfRoutingModule }   from './steelscarf-routing.module';

@NgModule({
    imports: [
        SteelScarfRoutingModule,
        CommonModule,
        FormsModule,
        TabsModule.forRoot()
    ],
    declarations: [ 
        SteelScarfComponent 
    ]
})
export class SteelScarfModule { }
