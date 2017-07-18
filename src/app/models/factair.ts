//import { DuctType } from '../models/duct-type';

export interface IFactair {
    model : number, // int, factairModels
    velocity : number, // decimal, required (fpm)
    position : string, // openclose {Open, Closed}
    distance : number, // int, distances {1c,2,3c,4c,5,6c,10c} (ft)
    maxVelocity : number, // out (ft)
    pressureDrop : number, // out (in wg)
    octaves : string // {63,125,250,500,1000,2000,4000,8000} (db)
}
