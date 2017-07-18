import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { TabsModule }               from 'ng2-bootstrap/tabs';

import { ConstructionComponent }       from './construction.component';
import { ConstructionRoutingModule }   from './construction-routing.module';

@NgModule({
    imports: [
        ConstructionRoutingModule,
        CommonModule,
        FormsModule,
        TabsModule.forRoot()
    ],
    declarations: [ 
        ConstructionComponent 
    ]
})
export class ConstructionModule { }
