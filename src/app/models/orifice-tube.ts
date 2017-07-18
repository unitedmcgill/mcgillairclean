//import { DuctType } from '../models/duct-type';

export interface IOrificeTube {
    testPressure : number, // System test pressure
    cfm : number, // Max leakage to test
    plate : string,
    tubeDiameter : number, // starts at 4 in
    orificeDiameter : number, // starts at 1.5 in
    betaRatio : number,
    openArea : string,
    tubeList : string
}
