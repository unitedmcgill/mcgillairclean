//import { DuctType } from '../models/duct-type';

export interface IApConv {
    selectedMeasure : measureOpt,
    uom : apResultItem,
    standardTemperature : number,
    standardPressure : number,
    normalTemperature : number,
    normalPressure : number,
    gasPressure : number,
    gasTemperature : number
}

export type measureOpt = {
    label : string,
    key : number
}

export type apResultItem = {
    key : number,
    label : string,
    uom1: string,
    uom2: string,
    value1 : number,
    value2: number
}