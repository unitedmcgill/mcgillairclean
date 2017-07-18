import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';
import { LoaderService } from './services/loader.service';

@Component({
    selector: 'body',
    template: '<router-outlet><span *ngIf="showLoader" class="loading"></span></router-outlet>'
})
export class AppComponent { 
    showLoader : boolean;
   constructor(private _router:Router, private _loaderService: LoaderService) {}
  
    ngOnInit() {       
        // TODO: assign proper type to event
        this._router.events.subscribe((event: any): void => {
            this.navigationInterceptor(event);
        this._loaderService.status.subscribe((val: boolean) => { this.showLoader;})
        });
    }

    navigationInterceptor(event): void {
        if (event instanceof NavigationStart) {
            this.showLoader = true;
        }
        if (event instanceof NavigationEnd) {
            this.showLoader = false;
        }
        if (event instanceof NavigationCancel) {
            this.showLoader = false;
        }
        if (event instanceof NavigationError) {
            this.showLoader = false;
        }
    }
}
