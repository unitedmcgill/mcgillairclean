import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls:  ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  constructor() { 
    this.showEmailAddress = false;
    this.salesEmail = "sales@mcgillairclean.com";
    this.engineeringEmail = "engineering@mcgillairclean.com";
    this.serviceEmail = "service@mcgillairclean.com";
  }

  salesEmail : string;
  serviceEmail : string;
  engineeringEmail : string;
  showEmailAddress : boolean;

  public tabs:Array<any> = [
    {title: 'Dynamic Title 1', content: 'Dynamic content 1'},
    {title: 'Dynamic Title 2', content: 'Dynamic content 2', disabled: true},
    {title: 'Dynamic Title 3', content: 'Dynamic content 3', removable: true},
    {title: 'Dynamic Title 4', content: 'Dynamic content 4', customClass: 'customClass'}
  ];
 
  public showEmail() {
    this.showEmailAddress = true;
  };

  public alertMe():void {
    setTimeout(function ():void {
      alert('You\'ve selected the alert tab!');
    });
  };
 
  public setActiveTab(index:number):void {
    this.tabs[index].active = true;
  };
 
  public removeTabHandler(/*tab:any*/):void {
    console.log('Remove Tab handler');
  };

  ngOnInit() {
  }

}
