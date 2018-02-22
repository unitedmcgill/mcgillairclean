import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { TabsModule }               from 'ngx-bootstrap/tabs';

import { CustomersComponent }       from './customers.component';
import { CustomersRoutingModule }   from './customers-routing.module';

@NgModule({
    imports: [
        CustomersRoutingModule,
        CommonModule,
        FormsModule,
        TabsModule.forRoot()
    ],
    declarations: [ 
        CustomersComponent 
    ]
})
export class CustomersModule { }
