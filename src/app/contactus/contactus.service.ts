
import {throwError as observableThrowError, Observable} from 'rxjs';

import {catchError, map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigService } from "../services/config.service";
import { ContactUs } from '../models/contact-us'
import { Values } from '../models/values';

@Injectable()
export class ContactUsService{

    private config : any;

    constructor(private configService: ConfigService, private http: HttpClient){
        this.config = configService.config;
    }

    public getValues() : Observable<Values[]>{
        var userData : any;

        // return this.http.get("http://cs1213:5001/api/values")
        // .map(res=>{
        //     if (res.status != 200){
        //         throw new Error('Error' + res.status);
        //     }
        //     else
        //     {
        //         return res.json();
        //     }
        // })
        let url = this.config.apiUrl+"/values";
        return this.http.get<Values[]>(url).pipe(
                   catchError((error:any)=>observableThrowError(error.json().error||'Server error')));

                //    .map(data => {
                //      userData = data;
                //      console.log(userData);
                //     })
    }

    public sendMessage(contact : ContactUs) : Observable<ContactUs> {
        
         let bodyString = JSON.stringify(contact); // Stringify payload
         let headers = new HttpHeaders({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
         let url = this.config.apiUrl+"/contactus";
         //let options = new RequestOptions({ headers: headers, method: "post" }); // Create a request option
         //.map((response:Response) => response.json())
         // .map((res:Response) => {
         //     console.log(res.json());
         //     return res.json();})
 
         return this.http.post<ContactUs>(url, bodyString, {headers:headers}).pipe(
         catchError(this._handleError));
        
         //alert(url + ":" + bodyString);
     }
     

    private _handleError(error:any){
        console.error(error);
        return observableThrowError(error.message || ' error');
    }

}