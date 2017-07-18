import { Injectable } from '@angular/core';
import  { Http, Response, Headers, RequestOptions } from '@angular/http';
import { ConfigService } from "../services/config.service";
import { ContactUs } from '../models/contact-us'
import {Observable} from 'rxjs/Rx';
import { Values } from '../models/values';

@Injectable()
export class ContactUsService{

    private config : any;

    constructor(private configService: ConfigService, private http: Http){
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
        return this.http.get(url)
                   .map((res:Response)=>res.json())
                   .catch((error:any)=>Observable.throw(error.json().error||'Server error'));

                //    .map(data => {
                //      userData = data;
                //      console.log(userData);
                //     })
    }

    public sendMessage(contact : ContactUs){
       
        let bodyString = JSON.stringify(contact); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let url = this.config.apiUrl+"/contactus";
        //let options = new RequestOptions({ headers: headers, method: "post" }); // Create a request option
        //.map((response:Response) => response.json())
        // .map((res:Response) => {
        //     console.log(res.json());
        //     return res.json();})

        this.http.post(url, bodyString, {headers:headers})
        .map((res:Response) => res.json())      
        .catch(this._handleError)
        .subscribe(
                data => console.log(data),
                err => console.log(err)
            );
       
        //alert(url + ":" + bodyString);
    }

    private _handleError(error:any){
        console.error(error);
        return Observable.throw(error.json().error || ' error');
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
    } 

}