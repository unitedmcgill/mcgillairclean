import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { TabsModule }               from 'ng2-bootstrap/tabs';

import { AboutUsComponent }       from './aboutus.component';
import { AboutUsRoutingModule }   from './aboutus-routing.module';

@NgModule({
    imports: [
        AboutUsRoutingModule,
        CommonModule,
        FormsModule,
        TabsModule.forRoot()
    ],
    declarations: [ 
        AboutUsComponent 
    ]
})
export class AboutUsModule { }
