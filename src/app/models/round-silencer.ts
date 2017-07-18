import { ISilencerResult } from '../models/silencer-result';

export interface IRoundSilencer {
    cfm : number, // int, Volume Flow Rate (cfm), required 
    diameter : number, // decimal, required (inches)
    pressureDrop : number, // decimal, required (in wg)
    calcVelocity : number, // decimal (inches)
    displayVelocity : number, // decimal (inches)
    freq1 : number, // int
    freq2 : number, // int
    freq3 : number, // int
    freq4 : number, // int
    freq5 : number, // int
    freq6 : number, // int
    freq7 : number, // int
    freq8 : number, // int
    elbow : number, // int 1 or 0
    type : string, // Single, Double, DoubleNoLoss, <blank> for All
    silencers : ISilencerResult[]
}
