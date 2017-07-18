//import { DuctType } from '../models/duct-type';

export interface IOffset {
    calcType : string, // offsetCalcTypes
    connectionType : string, // if calcType == Duct, offsetConnectionTypes
    diameter : number, // decimal, required (in)
    distance : number, // if calcType == Duct, offset distance (in)
    length : number, // if calcType == Duct, total length (in)
    centerLine1 : number, // centerLines
    centerLine2 : number, // if calcType == Duct, centerLines
    angle : number, // if calcType == Elbows, decimal (degrees)
    calcLengthDesc : string, // out
    calcLength : string // out
}
