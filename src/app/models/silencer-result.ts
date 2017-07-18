//import { DuctType } from '../models/duct-type';

export interface ISilencerResult {
    model : string,
    length : number, // decimal, required (inches)
    freq1 : number, // int
    freq2 : number, // int
    freq3 : number, // int
    freq4 : number, // int
    freq5 : number, // int
    freq6 : number, // int
    freq7 : number, // int
    freq8 : number, // int
    pressureDrop : number,
    weight : number,
    acceptable : number,
    velocity : number,
    type : string,
    selected : number,
    diameter : number
}
