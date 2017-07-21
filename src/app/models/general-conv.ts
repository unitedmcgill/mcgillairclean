//import { DuctType } from '../models/duct-type';

export interface IGenConv {
    dimension : dimOpt,
    measurement : number,
    uom : resultItem
}

export type dimOpt = {
    label : string,
    dim : number
}

export type resultItem = {
    key : string,
    uom : string,
    dim: number,
    value: number
}