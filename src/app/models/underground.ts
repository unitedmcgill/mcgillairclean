//import { DuctType } from '../models/duct-type';

export interface IUnderground {
    spiral : boolean;
    loadType : string;
    distLoad : number;  // if load = long
    vehicle : number;  // if load = vehicle
    area : number;  // if load = vehicle
    material : string;
    diameter : number;
    gauge : number;
    density : number;
    depth : number;
    modulus : number;  // not req
    soilLoad : number; // out
    externalLoad : number; // out
    totalLoad : number; // out
    deflection : number; // out
    maxDepth : number; // out
    passFail : string; // return
}
