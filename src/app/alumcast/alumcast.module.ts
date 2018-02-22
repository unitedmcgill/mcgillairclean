import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { TabsModule }               from 'ngx-bootstrap/tabs';

import { AlumCastComponent }       from './alumcast.component';
import { AlumCastRoutingModule }   from './alumcast-routing.module';

@NgModule({
    imports: [
        AlumCastRoutingModule,
        CommonModule,
        FormsModule,
        TabsModule.forRoot()
    ],
    declarations: [ 
        AlumCastComponent 
    ]
})
export class AlumCastModule { }
