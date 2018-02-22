import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { TabsModule }               from 'ngx-bootstrap/tabs';

import {PaintBoothsComponent }       from './paintbooths.component';
import {PaintBoothsRoutingModule }   from './paintbooths-routing.module';

@NgModule({
    imports: [
       PaintBoothsRoutingModule,
        CommonModule,
        FormsModule,
        TabsModule.forRoot()
    ],
    declarations: [ 
       PaintBoothsComponent 
    ]
})
export class PaintBoothsModule { }
