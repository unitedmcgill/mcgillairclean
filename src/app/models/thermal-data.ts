//import { DuctType } from '../models/duct-type';

export interface IThermalData {
    insulation : number,
    wind : number, // int
    diameter : number;
    flowRate : number;
    insideDuctTemp : number;
    ambientTemp : number;
    ductLength : number;
    humidity : number;
    heatTransfer : number; // out
    skinTemp : number; // out  
    exitTemp : number; // out
    dewpointTemp : number; // out
    condensation : string; // out
    conductivity : number; // out
    density : number; // out
}
