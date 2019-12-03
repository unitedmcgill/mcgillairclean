import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { TabsModule }               from 'ngx-bootstrap/tabs';

import { GreetingComponent }       from './greeting.component';
import { GreetingRoutingModule }   from './greeting-routing.module';

@NgModule({
    imports: [
        GreetingRoutingModule,
        CommonModule,
        FormsModule,
        TabsModule.forRoot()
    ],
    declarations: [ 
        GreetingComponent 
    ]
})
export class GreetingModule { }
