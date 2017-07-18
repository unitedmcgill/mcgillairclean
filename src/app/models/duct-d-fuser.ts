//import { DuctType } from '../models/duct-type';

export interface IDuctDFuser {
    calcType : string, // ddCalcTypes {Pick, Calc}
    velocityRange : number, // if ddCalcType == Calc, velocityRanges
    diameter : number, // if ddCalcType == Pick
    constDiameter : number, // yesnoInt
    cfm : number, // Total volume flow rate
    length : number, // Total Length
    ductList : string,
    orificeList : string,
    enteringVelocity : number, // out
    totalPressureDrop : number, // out
    error : string // out
}
