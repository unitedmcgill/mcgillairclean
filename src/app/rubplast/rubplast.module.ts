import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { TabsModule }               from 'ngx-bootstrap/tabs';

import { RubPlastComponent }       from './rubplast.component';
import { RubPlastRoutingModule }   from './rubplast-routing.module';

@NgModule({
    imports: [
        RubPlastRoutingModule,
        CommonModule,
        FormsModule,
        TabsModule.forRoot()
    ],
    declarations: [ 
        RubPlastComponent 
    ]
})
export class RubPlastModule { }
