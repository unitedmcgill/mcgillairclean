//import { DuctType } from '../models/duct-type';

export interface IRelHum {
    relativeHumidity : number, // 
    temperature : number, // 
    percentVolume : number, // out
    saturationPressure : number // out
}

export interface IWtVol {
    percentH2OInputType : string,
    percentH2OOptions : number,
    percentH2OIn : number,
    dryGasMolecularWeight : number,
    percentH2OOut : number // out

}
