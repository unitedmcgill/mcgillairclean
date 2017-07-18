//import { DuctType } from '../models/duct-type';

export interface ICalcOperatingPressure {
    type : number,
    material : string;
    gauge : number;
    spiral : boolean;
    diameter : number;
    stiffenerSpacing : number;
    ductTemp : number;
    ductClass : string;
    pressure : number;
    operatingPressure : number;
    stiffenerSize : string;
}
