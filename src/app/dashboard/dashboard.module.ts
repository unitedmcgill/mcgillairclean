import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { AlertModule, CarouselModule }              from 'ngx-bootstrap';


import { DashboardComponent }       from './dashboard.component';
import { DashboardRoutingModule }   from './dashboard-routing.module';
import { JumbotronComponent }       from './jumbotron/jumbotron.component';

@NgModule({
    imports: [
        DashboardRoutingModule,
        CommonModule,
        FormsModule,
        AlertModule,
        CarouselModule
    ],
    declarations: [ 
        DashboardComponent, 
        JumbotronComponent,
    ]
})
export class DashboardModule { }
