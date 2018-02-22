import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { TabsModule }               from 'ngx-bootstrap/tabs';

import { ReferencesComponent }       from './references.component';
import { ReferencesRoutingModule }   from './references-routing.module';

@NgModule({
    imports: [
        ReferencesRoutingModule,
        CommonModule,
        FormsModule,
        TabsModule.forRoot()
    ],
    declarations: [ 
        ReferencesComponent 
    ]
})
export class ReferencesModule { }
