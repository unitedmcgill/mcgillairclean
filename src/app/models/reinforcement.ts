//import { DuctType } from '../models/duct-type';

export interface IReinforcement {
    ductType : string, // ductTypes
    calcType : string, // calcTypes
    pressureClass : string, // pressureClasses
    application : string, // applications
    minor : number,
    major : number, 
    gauge : number, // int (gauges2), if calcType = reinforcement
    selectedReinforcement : number, // int (reinforcements), if calcType = gauge
    minorReinforcement : string, // out
    majorReinforcement : string, // out
    calculatedGauge : number // int out
}
