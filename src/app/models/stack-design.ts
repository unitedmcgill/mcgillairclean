//import { DuctType } from '../models/duct-type';

export interface IStackDesign {
    safetyFactor : number;
    spiral : boolean;
    material : string;
    diameter : number;
    wind : number;
    height : number;
    gauge : number;
    velocity : number;
    stress : number;
    buckling : number;
    yield : number;
    deflection : number;
    passFail : string;
}
