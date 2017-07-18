import { ISilencerResult } from '../models/silencer-result';

export interface IRectSilencer {
    cfm : number, // int, Volume Flow Rate (cfm), required 
    width : number, // decimal, required (inches)
    height : number, // decimal, required (inches)
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
    louver : number, // int 1 or 0
    wide : number, // int 1 or 0
    type : string, // Standard, LowFrequency, Erosion, NoFill, <blank> for All
    silencers : ISilencerResult[]
}
