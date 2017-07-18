import { Injectable } from '@angular/core';
import  { Http, Response, Headers, RequestOptions } from '@angular/http';
import { ConfigService } from "../services/config.service";
import { Observable } from 'rxjs/Observable';
import { IDuctConvert } from '../models/duct-convert';
import { ICalcOperatingPressure } from '../models/operating-pressure'
import { ISupportDesign } from '../models/support-design'
import { IStackDesign } from '../models/stack-design'
import { IUnderground } from '../models/underground'
import { IThermalData } from '../models/thermal-data';
import { IReinforcement } from '../models/reinforcement';
import { IOrificeTube } from '../models/orifice-tube';
import { IDuctDFuser } from '../models/duct-d-fuser';
import { IFactair } from '../models/factair';
import { IOffset } from '../models/offset';
import { IAcoustical } from '../models/acoustical';
import { IRectSilencer } from '../models/rect-silencer';
import { IRoundSilencer } from '../models/round-silencer';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ToolsService{

    private config : any;

    constructor(private configService: ConfigService, private http: Http){
        this.config = configService.config;
    }

    public checkUser() : Observable<string>{
        let url = this.config.apiUrl+"/checkuser";
        return this.http.get(url)
                   .map((res: Response) => {
                        let result = res.json();
                        //TODO you can do stuff with the values here if you want
                        return result;
                   })
                   .catch(this._handleError);
    }

    public convertVolumeFlowRate(value : string, bToCfm : string) : Observable<string>{
        let parms = '/'+value+'/'+bToCfm;
        let url = this.config.apiUrl+"/convertvolumeflowrate"+parms;
        return this.http.get(url)
                   .map((res: Response) => {
                        let result = res.json();
                        //TODO you can do stuff with the values here if you want

                        return result;
                   })
                   .catch(this._handleError);
    }

    public convertDuctTypes(ductConvert : IDuctConvert) : Observable<IDuctConvert>{
       
        let bodyString = JSON.stringify(ductConvert); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let url = this.config.apiUrl+"/convertducttypes";

        return this.http.post(url, bodyString, {headers:headers})
        .map((res:Response) => {
            let data = res.json();
            //console.log('test: '+data);
            // Fix enums
            //let duct = DuctType[data.type];
            //data.type = duct;

            return data;
        })      
        .catch(this._handleError);
       
        //alert(url + ":" + bodyString);
    }

    public calcPressure(operatingPressure : ICalcOperatingPressure) : Observable<ICalcOperatingPressure>{
       
        let bodyString = JSON.stringify(operatingPressure); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let url = this.config.apiUrl+"/pressure";

        return this.http.post(url, bodyString, {headers:headers})
        .map((res:Response) => {
            let data = res.json();
            //console.log('test: '+data);
            // Fix enums
            //let duct = DuctType[data.type];
            //data.type = duct;

            return data;
        })      
        .catch(this._handleError);
       
        //alert(url + ":" + bodyString);
    }

    public calcStiffenerSpacing(operatingPressure : ICalcOperatingPressure) : Observable<ICalcOperatingPressure>{
       
        let bodyString = JSON.stringify(operatingPressure); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let url = this.config.apiUrl+"/stiffenerspacing";

        return this.http.post(url, bodyString, {headers:headers})
        .map((res:Response) => {
            let data = res.json();
            //console.log('test: '+data);
            // Fix enums
            //let duct = DuctType[data.type];
            //data.type = duct;

            return data;
        })      
        .catch(this._handleError);
       
        //alert(url + ":" + bodyString);
    }

    public calcMinThickness(operatingPressure : ICalcOperatingPressure) : Observable<ICalcOperatingPressure>{
       
        let bodyString = JSON.stringify(operatingPressure); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let url = this.config.apiUrl+"/minthickness";

        return this.http.post(url, bodyString, {headers:headers})
        .map((res:Response) => {
            let data = res.json();
            //console.log('test: '+data);
            // Fix enums
            //let duct = DuctType[data.type];
            //data.type = duct;

            return data;
        })      
        .catch(this._handleError);
       
        //alert(url + ":" + bodyString);
    }

    public calcBurstCollapse( calcType : String, operatingPressure : ICalcOperatingPressure) : Observable<ICalcOperatingPressure>{
        let bodyString = JSON.stringify(operatingPressure); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let url = this.config.apiUrl+"/pressurecollapse";
        if ( calcType == 'burst')
        {
            url = this.config.apiUrl+"/pressureburst";
        }

        return this.http.post(url, bodyString, {headers:headers})
        .map((res:Response) => {
            let data = res.json();
            //console.log('test: '+data);
            // Fix enums
            //let duct = DuctType[data.type];
            //data.type = duct;

            return data;
        })      
        .catch(this._handleError);
       
        //alert(url + ":" + bodyString);
    }

    public calcSupport(calcSupport : ISupportDesign) : Observable<ISupportDesign>{
       
        let bodyString = JSON.stringify(calcSupport); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let url = this.config.apiUrl+"/support";

        return this.http.post(url, bodyString, {headers:headers})
        .map((res:Response) => {
            let data = res.json();
            //console.log('test: '+data);
            // Fix enums
            //let duct = DuctType[data.type];
            //data.type = duct;

            return data;
        })      
        .catch(this._handleError);
       
        //alert(url + ":" + bodyString);
    }    

    public calcUnderground(calcUnderground : IUnderground) : Observable<IUnderground>{
       
        let bodyString = JSON.stringify(calcUnderground); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let url = this.config.apiUrl+"/underground";

        return this.http.post(url, bodyString, {headers:headers})
        .map((res:Response) => {
            let data = res.json();
            //console.log('test: '+data);
            // Fix enums
            //let duct = DuctType[data.type];
            //data.type = duct;

            return data;
        })      
        .catch(this._handleError);
       
        //alert(url + ":" + bodyString);
    }    

    public calcThermalData(calcThermalData : IThermalData) : Observable<IThermalData>{
       
        let bodyString = JSON.stringify(calcThermalData); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let url = this.config.apiUrl+"/thermaldata";

        return this.http.post(url, bodyString, {headers:headers})
        .map((res:Response) => {
            let data = res.json();
            //console.log('test: '+data);
            // Fix enums
            //let duct = DuctType[data.type];
            //data.type = duct;

            return data;
        })      
        .catch(this._handleError);
       
        //alert(url + ":" + bodyString);
    }    

    public calcReinforcement(reinforcement : IReinforcement) : Observable<IReinforcement>{
       
        let bodyString = JSON.stringify(reinforcement); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let url = this.config.apiUrl+"/reinforcement";

        return this.http.post(url, bodyString, {headers:headers})
        .map((res:Response) => {
            let data = res.json();
            //console.log('test: '+data);
            // Fix enums
            //let duct = DuctType[data.type];
            //data.type = duct;

            return data;
        })      
        .catch(this._handleError);
       
        //alert(url + ":" + bodyString);
    }    

    public calcOrificeTube(orificetube : IOrificeTube) : Observable<IOrificeTube>{
       
        let bodyString = JSON.stringify(orificetube); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let url = this.config.apiUrl+"/orificetube";

        return this.http.post(url, bodyString, {headers:headers})
        .map((res:Response) => {
            let data = res.json();
            //console.log('test: '+data);
            // Fix enums
            //let duct = DuctType[data.type];
            //data.type = duct;

            return data;
        })      
        .catch(this._handleError);
       
        //alert(url + ":" + bodyString);
    }    

    public calcDDF( ddf : IDuctDFuser ) : Observable<IDuctDFuser>{

        let bodyString = JSON.stringify(ddf); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let url = this.config.apiUrl+"/ddf";

        return this.http.post(url, bodyString, {headers:headers})
        .map((res:Response) => {
            let data = res.json();
            //console.log('test: '+data);
            // Fix enums
            //let duct = DuctType[data.type];
            //data.type = duct;

            return data;
        })      
        .catch(this._handleError);        
    }

    public calcFactair(factair : IFactair) : Observable<IFactair>{
       
        let bodyString = JSON.stringify(factair); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let url = this.config.apiUrl+"/factair";

        return this.http.post(url, bodyString, {headers:headers})
        .map((res:Response) => {
            let data = res.json();
            //console.log('test: '+data);
            // Fix enums
            //let duct = DuctType[data.type];
            //data.type = duct;

            return data;
        })      
        .catch(this._handleError);
       
        //alert(url + ":" + bodyString);
    }        

public calcOffset(offset : IOffset) : Observable<IOffset>{
       
        let bodyString = JSON.stringify(offset); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let url = this.config.apiUrl+"/offset";

        return this.http.post(url, bodyString, {headers:headers})
        .map((res:Response) => {
            let data = res.json();
            //console.log('test: '+data);
            // Fix enums
            //let duct = DuctType[data.type];
            //data.type = duct;

            return data;
        })      
        .catch(this._handleError);
       
        //alert(url + ":" + bodyString);
    }        

public calcAcoustical(acoustical : IAcoustical) : Observable<IAcoustical>{
       
        let bodyString = JSON.stringify(acoustical); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let url = this.config.apiUrl+"/acoustical";

        return this.http.post(url, bodyString, {headers:headers})
        .map((res:Response) => {
            let data = res.json();
            //console.log('test: '+data);
            // Fix enums
            //let duct = DuctType[data.type];
            //data.type = duct;

            return data;
        })      
        .catch(this._handleError);
       
        //alert(url + ":" + bodyString);
    }   

public selectRectSilencer(silencer : IRectSilencer) : Observable<IRectSilencer>{
       
        let bodyString = JSON.stringify(silencer); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let url = this.config.apiUrl+"/rectsilencer";

        return this.http.post(url, bodyString, {headers:headers})
        .map((res:Response) => {
            let data = res.json();
            //console.log('test: '+data);
            // Fix enums
            //let duct = DuctType[data.type];
            //data.type = duct;

            return data;
        })      
        .catch(this._handleError);
       
        //alert(url + ":" + bodyString);
    }   

public selectRoundSilencer(silencer : IRoundSilencer) : Observable<IRoundSilencer>{
       
        let bodyString = JSON.stringify(silencer); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let url = this.config.apiUrl+"/roundsilencer";

        return this.http.post(url, bodyString, {headers:headers})
        .map((res:Response) => {
            let data = res.json();
            //console.log('test: '+data);
            // Fix enums
            //let duct = DuctType[data.type];
            //data.type = duct;

            return data;
        })      
        .catch(this._handleError);
       
        //alert(url + ":" + bodyString);
    }  

    public calcStack(calcSupport : IStackDesign) : Observable<IStackDesign>{
       
        let bodyString = JSON.stringify(calcSupport); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let url = this.config.apiUrl+"/stack";

        return this.http.post(url, bodyString, {headers:headers})
        .map((res:Response) => {
            let data = res.json();
            //console.log('test: '+data);
            // Fix enums
            //let duct = DuctType[data.type];
            //data.type = duct;

            return data;
        })      
        .catch(this._handleError);
       
        //alert(url + ":" + bodyString);
    }    

    private _handleError(error:any){
        console.error(error);
        return Observable.throw(error._body);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
    } 

}