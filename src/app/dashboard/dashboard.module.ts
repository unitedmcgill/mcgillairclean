import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { ChartsModule }             from 'ng2-charts/ng2-charts';
import { AlertModule, CarouselModule }              from 'ng2-bootstrap';


import { DashboardComponent }       from './dashboard.component';
import { DashboardRoutingModule }   from './dashboard-routing.module';
import { JumbotronComponent }       from './jumbotron/jumbotron.component';

@NgModule({
    imports: [
        DashboardRoutingModule,
        CommonModule,
        FormsModule,
        ChartsModule,
        AlertModule,
        CarouselModule
    ],
    declarations: [ 
        DashboardComponent, 
        JumbotronComponent,
    ]
})
export class DashboardModule { }
