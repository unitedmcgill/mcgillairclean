import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { TabsModule }               from 'ng2-bootstrap/tabs';

import { ProductLitComponent }       from './productlit.component';
import { ProductLitRoutingModule }   from './productlit-routing.module';

@NgModule({
    imports: [
        ProductLitRoutingModule,
        CommonModule,
        FormsModule,
        TabsModule.forRoot()
    ],
    declarations: [ 
        ProductLitComponent 
    ]
})
export class ProductLitModule { }
