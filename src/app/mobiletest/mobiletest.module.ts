import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { TabsModule }               from 'ngx-bootstrap/tabs';

import { MobileTestComponent }       from './mobiletest.component';
import { MobileTestRoutingModule }   from './mobiletest-routing.module';

@NgModule({
    imports: [
        MobileTestRoutingModule,
        CommonModule,
        FormsModule,
        TabsModule.forRoot()
    ],
    declarations: [ 
        MobileTestComponent 
    ]
})
export class MobileTestModule { }
