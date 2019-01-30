import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { TabsModule }               from 'ngx-bootstrap/tabs';

import { CatFiltersComponent }       from './catfilters.component';
import { CatFiltersRoutingModule }   from './catfilters-routing.module';

@NgModule({
    imports: [
        CatFiltersRoutingModule,
        CommonModule,
        FormsModule,
        TabsModule.forRoot()
    ],
    declarations: [ 
        CatFiltersComponent 
    ]
})
export class CatFiltersModule { }
