import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { TabsModule }               from 'ngx-bootstrap/tabs';

import { IncineratorsComponent }       from './incinerators.component';
import { IncineratorsRoutingModule }   from './incinerators-routing.module';

@NgModule({
    imports: [
        IncineratorsRoutingModule,
        CommonModule,
        FormsModule,
        TabsModule.forRoot()
    ],
    declarations: [ 
        IncineratorsComponent 
    ]
})
export class IncineratorsModule { }
