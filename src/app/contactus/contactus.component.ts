import { Component, OnInit } from '@angular/core';
import { ContactUs } from '../models/contact-us';
import { ContactUsService } from './contactus.service';
import { Values } from '../models/values';

@Component({
  //selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactUsComponent implements OnInit {

  public contact : ContactUs;
  public active : boolean;
  public values : Values[];
  public errorMessage: string;

  constructor( private contactUsService: ContactUsService) {
    this.contact = new ContactUs();
    this.active = true;
   }

  ngOnInit() {
    // this.contactUsService.getValues()
    //                      .subscribe(
    //                         data => this.values = data,
    //                         err => console.error(err),
    //                         () => console.log('done'));
  }

  public onSend(){
    //console.log(this.config.apiUrl);
    //alert(JSON.stringify(this.config));
    
    // Set the domain the request is coming from
    this.contact.forWebsiteDomain = "AirClean";
    this.contactUsService.sendMessage(this.contact);

    // Clear the form since we are doing *ngIf="active" on the form tag
    this.contact = new ContactUs();
    
    // Trick to reset the pristine state of the form
    // This is a temporary workaraound until a form reset procedure is available
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }

}
