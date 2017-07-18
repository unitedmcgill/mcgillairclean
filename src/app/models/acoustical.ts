//import { DuctType } from '../models/duct-type';

export interface IAcoustical {
    calcType : string, // acousticalCalcTypes
    levels : number, // if calcType == Addition {1,2,3,4,5} numbers125
    lengthBefore : number, // if calcType == Discharge (ft)
    lengthAfter : number, // if calcType == Discharge (ft)
    distance : number, // if calcType == Discharge (ft)
    inputLevels : number[][], // 0,x = Low levels, 1,x = Duct Attenuation Before (Discharge), 2,x = Silencer Attenuation (Discharge), 3,x = GNL (Discharge), 4,x = Duct Attenuation After (Discharge)
    outputDesc : string, // out
    outputLevels : number[][], // out
    overall : number //out
}
