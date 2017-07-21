//import { DuctType } from '../models/duct-type';

export interface IRelHum {
    relativeHumidity : number, // 
    temperature : number, // 
    percentVolume : number, // out
    saturationPressure : number // out
}

export interface IWtVol {
    percentH2OInputType : string,
    percentH2OOptions : number,
    percentH2OIn : number,
    dryGasMolecularWeight : number,
    percentH2OOut : number // out

}

export interface IFlowRate {
    gasFlowRate : number,
    flowInputUOM : string,
    flowPercentH2OIn : number, // if !lb/hr
    gasTemperature : number, // if !lb/hr
    gasPressure : number, // if !lb/hr
    waterMassRate : number, // if lb/hr !!
    dryGasMolecularWeight : number, // if lb/hr !!
    gasFlowRateResult : number, // out
    initialWaterVapor : number, // out
    percentVolumeH2O : number, // out
    gasFlowRateResultUOM : string //out
}

export interface IPollute {
    volumeFlow : number, 
    pollutantMassFlow : number,
    pollutantMolecularRate : number, // if ppmdv
    pollutantConcentration : number, // out
    pollutantConcentrationUOM : string
}

export interface IPressure {
    elevation : number,
    elevationPressureInHg : number,  //out in hg
    elevationPressurePSIA : number // out psia
}

export type MoleWt = {
    name: string,
    mw: number,
    percentVolume: number,
    percentMass: number
}

export interface IMoleWt {
    molWtInputs : MoleWt[],
    totalVolumePercent : number, // out
    totalMassPercent : number, // out
    apparentMolecularWeight : number, // out
    dryGasApparentMolecularWeight : number  // out
}