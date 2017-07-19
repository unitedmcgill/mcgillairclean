//import { DuctType } from '../models/duct-type';

export interface IBlower {
    gasFlow : number, // decimal scfmd
    percentH2O : number, // integer %
    operatingTemperature : number, // decimal F
    fanStaticPressure : number, // decimal in wg
    fanInletPressure : number, // decimal psia
    fanEfficiency : number, // intenger %
    flowSafetyFactor : number, // intenger %
    staticPressureSafetyFactor : number, // integer %
    gasFlowActual : number, // out
    designFlowActual : number, // out
    designStaticPressure : number, // out
    fanBHP : number, // out
    fanMotorHP : number, // out
    wetGasDensity : number, // out
    densityFactor : number, // out
    standardStaticPressure : number // out
}
