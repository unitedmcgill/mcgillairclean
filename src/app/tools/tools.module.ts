import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { TabsModule }               from 'ngx-bootstrap/tabs';

import { ToolsComponent }           from './tools.component';
import { ToolsRoutingModule }       from './tools-routing.module';
import { ToolsService }             from './tools.service';

import { GreaterThanZeroValidator } from '../shared/greaterthanzero.validator';
import { NonZeroValidator }         from '../shared/nonzero.validator';
import { PercentValidator }         from '../shared/percent.validator';

@NgModule({
    imports: [
        ToolsRoutingModule,
        CommonModule,
        FormsModule,
        TabsModule.forRoot()
    ],
    declarations: [ 
        ToolsComponent,
        GreaterThanZeroValidator,
        NonZeroValidator,
        PercentValidator
    ],
    providers:[ToolsService]
})
export class ToolsModule { }
