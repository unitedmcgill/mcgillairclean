import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { TabsModule }               from 'ng2-bootstrap/tabs';

import { CementKilnsComponent }       from './cementkilns.component';
import { CementKilnsRoutingModule }   from './cementkilns-routing.module';

@NgModule({
    imports: [
        CementKilnsRoutingModule,
        CommonModule,
        FormsModule,
        TabsModule.forRoot()
    ],
    declarations: [ 
        CementKilnsComponent 
    ]
})
export class CementKilnsModule { }
