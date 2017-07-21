//import { DuctType } from '../models/duct-type';

export interface IDuctSizing {
    gasFlow : number,
    flowUOM : string,
    gasTemperature : number, // if SCFMd 
    percentH2O : number, // if SCFMd
    gasVelocity : number, 
    gasPressure : number, // if SCFMd
    ductDiameterIn : number, // out
    ductDiameterFt : number, // out
    ductCrossSectionalAreaSqIn : number, // out
    ductCrossSectionalAreaSqFt : number, // out
    gasFlowActual : number // out if SCFMd
}
