import { Injectable } from '@angular/core';
import 'autotrack/autotrack.js';

@Injectable()
export class AnalyticsService {
constructor() {
(<any> window).ga = (<any> window).ga || ((...args) => {
((<any> window).ga.q = (<any> window).ga.q || []).push(args);
});
(<any> window).ga.l = +new Date();

(<any> window).ga('create', 'UA-109492022-4', 'auto');
(<any> window).ga('require', 'cleanUrlTracker');
(<any> window).ga('require', 'eventTracker');
(<any> window).ga('require', 'outboundLinkTracker');
(<any> window).ga('require', 'urlChangeTracker');
}

pageView(url: string) {
(<any> window).ga('set', 'page', url);
(<any> window).ga('send', 'pageview');
}

// to track clicks on html attributes
// ga-on="click"
}