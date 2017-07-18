import { Component, OnInit }            from '@angular/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: './full-layout.component.html'
})
export class FullLayoutComponent implements OnInit {

    constructor() { }

    public year : number;

    ngOnInit(): void {
        this.year = new Date().getFullYear();
    }
}
