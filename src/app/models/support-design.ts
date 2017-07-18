//import { DuctType } from '../models/duct-type';

export interface ISupportDesign {
    insulation : number,
    load : number;
    density: number;
    safetyFactor : number;
    spiral : boolean;
    material : string;
    diameter : number;
    wind : number;
    snow : number;
    ringSpacing : number;
    innerGauge : number;
    outerGauge : number;
    allowedDeflection : number;
    actualDeflection : number;
    maxLength : number;
    passFail : string;
    materialLoad : number;
}
