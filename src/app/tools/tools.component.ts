import { Component, OnInit } from '@angular/core';
import { ToolsService } from './tools.service';
import { IBlower } from '../models/blower';
import { IRelHum } from '../models/volume';
import { IWtVol } from '../models/volume';
import { IFlowRate } from '../models/volume';
import { IPollute } from '../models/volume';
import { IPressure } from '../models/volume';
import { IMoleWt } from '../models/volume';
import { MoleWt } from '../models/volume';
import { IDuctSizing } from '../models/duct-sizing';
import { IGenConv } from '../models/general-conv';
import { dimOpt, resultItem } from '../models/general-conv';
import { IApConv, measureOpt, apResultItem } from '../models/ap-conv';

@Component({
  //selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {

  public showLoader : boolean = false;

  public H2OInputTypes = [
    { value: 'Weight', display: 'Weight'},
    { value: 'Volume', display: 'Volume'}
  ];

  public flowRateTypes = [
    { value: 'SCFMd', display: 'SCFMd'},
    { value: 'ACFM', display: 'ACFM'},
    { value: 'lb/hr', display: 'lb/hr'}
  ];

  public ductFlowRateTypes = [
    { value: 'SCFMd', display: 'SCFMd'},
    { value: 'ACFM', display: 'ACFM'}
  ];

  public polluteTypes = [
    { value: 'gr/dscf', display: 'gr/dscf'},
    { value: 'ppmdv', display: 'ppmdv'}
  ];

  public blower : IBlower = {
    gasFlow : 0, // decimal scfmd
    percentH2O : 0, // integer %
    operatingTemperature : 0, // decimal F
    fanStaticPressure : 0, // decimal in wg
    fanInletPressure : 0, // decimal psia
    fanEfficiency : 0, // intenger %
    flowSafetyFactor : 0, // intenger %
    staticPressureSafetyFactor : 0, // integer %
    gasFlowActual : 0, // out
    designFlowActual : 0, // out
    designStaticPressure : 0, // out
    fanBHP : 0, // out
    fanMotorHP : 0, // out
    wetGasDensity : 0, // out
    densityFactor : 0, // out
    standardStaticPressure : 0 // out    
  };
  public relHum : IRelHum = {
    relativeHumidity : 0, 
    temperature : 0, 
    percentVolume : 0, // out
    saturationPressure : 0 // out    
  };
  public wtVol : IWtVol = {
    percentH2OInputType : this.H2OInputTypes[0].value,
    percentH2OOptions : 0,
    percentH2OIn : 0,
    dryGasMolecularWeight : 0,
    percentH2OOut : 0 // out
  };
  public flowRate : IFlowRate = {
    gasFlowRate : 0,
    flowInputUOM : this.flowRateTypes[0].value,
    flowPercentH2OIn : 0, // if !lb/hr
    gasTemperature : 0, // if !lb/hr
    gasPressure : 0, // if !lb/hr
    waterMassRate : 0, // if lb/hr !!
    dryGasMolecularWeight : 0, // if lb/hr !!
    gasFlowRateResult : 0, // out
    initialWaterVapor : 0, // out
    percentVolumeH2O : 0, // out   
    gasFlowRateResultUOM : ''
  };
  public pollute : IPollute = {
    volumeFlow : 0, 
    pollutantMassFlow : 0,
    pollutantMolecularRate : 0, // if ppmdv
    pollutantConcentration : 0, // out
    pollutantConcentrationUOM : this.polluteTypes[0].value
  };
  public pressure : IPressure = {
    elevation : 0,
    elevationPressureInHg : 0,  //out in hg
    elevationPressurePSIA : 0 // out psia
  };
  public molWt : IMoleWt = {
    molWtInputs : [
    { name: 'CO\u2082', mw: 44.0096, percentVolume: 0, percentMass: 0 },
    { name: 'N\u2082', mw: 28.0134, percentVolume: 0, percentMass: 0 }, { name: 'O\u2082', mw: 31.9989, percentVolume: 0, percentMass: 0 },
    { name: 'SO\u2082', mw: 64.0644, percentVolume: 0, percentMass: 0 }, { name: 'HCl', mw: 36.4611, percentVolume: 0, percentMass: 0 },
    { name: 'HF', mw: 20.0064, percentVolume: 0, percentMass: 0 }, { name: 'NO\u2082', mw: 46.0056, percentVolume: 0, percentMass: 0 },
    { name: 'H\u2082O', mw: 18.0153, percentVolume: 0, percentMass: 0 }, { name: 'Other', mw: 0, percentVolume: 0, percentMass: 0 }],
    totalVolumePercent : 0, // out
    totalMassPercent : 0, // out
    apparentMolecularWeight : 0, // out
    dryGasApparentMolecularWeight : 0  // out    
  }
  public ductSizing : IDuctSizing = {
    gasFlow : 0,
    flowUOM : this.ductFlowRateTypes[0].value,
    gasTemperature : 0, // if SCFMd 
    percentH2O : 0, // if SCFMd
    gasVelocity : 0, 
    gasPressure : 0, // if SCFMd
    ductDiameterIn : 0, // out
    ductDiameterFt : 0, // out
    ductCrossSectionalAreaSqIn : 0, // out
    ductCrossSectionalAreaSqFt : 0, // out
    gasFlowActual : 0 // out if SCFMd  
  };

  public dimOptions : dimOpt[] = [{label : 'Linear', dim: 1}, {label: 'Area', dim: 2}, {label: 'Volume', dim: 3}];
  public results : resultItem[] = [
      {key: 'in', uom: 'Inches', dim: 1, value: 0},
      {key: 'ft', uom: 'Feet', dim: 1, value: 0},
      {key: 'yd', uom: 'Yards', dim: 1, value: 0},
      {key: 'mi', uom: 'Miles', dim: 1, value: 0},
      {key: 'mm', uom: 'Millimeters', dim: 1, value: 0},
      {key: 'cm', uom: 'Centimeters', dim: 1, value: 0},
      {key: 'm', uom: 'Meters', dim: 1, value: 0},
      {key: 'km', uom: 'Kilometers', dim: 1, value: 0},
      {key: 'ac', uom: 'Acres', dim: 2, value: 0},
      {key: 'l', uom: 'Liters', dim: 3, value: 0},
      {key: 'qt', uom: 'Quarts', dim: 3, value: 0},
      {key: 'gal', uom: 'Gallons', dim: 3, value: 0}
    ];

  public genConv : IGenConv = {
    dimension : this.dimOptions[0],
    measurement : 0,
    uom : this.results[0]
  }


  
  public measurementOptions : measureOpt[] = [{ label: 'Flow Rate', key: 0 }, { label: 'Temperature', key: 1 }, { label: 'Velocity', key: 2 },
            { label: 'Pressure', key: 3 }, { label: 'Other', key: 4 }];
  
  public apResults : apResultItem[] = 
           [{ key: 0, label: 'Flow Rate - Actual', uom1: 'ACFM', uom2: 'Am\u00B3/hr', value1: 0, value2: 0 },
            { key: 0, label: 'Flow Rate - Standard to Normal', uom1: 'SCFM', uom2: 'Nm\u00B3/hr', value1: 0, value2: 0 },
            { key: 0, label: 'Flow Rate - Dry', uom1: 'SCFMd', uom2: 'Nm\u00B3/hr (d)', value1: 0, value2: 0 },
            { key: 0, label: 'Flow Rate - Wet', uom1: 'SCFMw', uom2: 'Nm\u00B3/hr (w)', value1: 0, value2: 0 },
            { key: 0, label: 'Flow Rate', uom1: 'cfm', uom2: 'Am\u00B3/hr', value1: 0, value2: 0 },
            { key: 0, label: 'Particulate Concentration', uom1: 'gr/dscf', uom2: 'mg/Nm\u00B3', value1: 0, value2: 0 },
            { key: 1, label: 'Temperature', uom1: '°F', uom2: '°C', value1: 32, value2: 0 },
            { key: 1, label: 'Temperature', uom1: '°F', uom2: 'K', value1: 32, value2: 273.15 },
            { key: 1, label: 'Temperature', uom1: '°C', uom2: 'K', value1: 0, value2: 273.15 },
            { key: 2, label: 'Velocity (per second)', uom1: 'ft/s', uom2: 'm/s', value1: 0, value2: 0 },
            { key: 2, label: 'Velocity (per minute)', uom1: 'ft/min', uom2: 'm/min', value1: 0, value2: 0 },
            { key: 2, label: 'Velocity (per hour)', uom1: 'mph', uom2: 'km/hr', value1: 0, value2: 0 },
            { key: 3, label: 'Pressure', uom1: 'in wg', uom2: 'mm Hg', value1: 0, value2: 0 },
            { key: 3, label: 'Pressure', uom1: 'in wg', uom2: 'psia', value1: 0, value2: 0 },
            { key: 3, label: 'Pressure', uom1: 'psi', uom2: 'bars', value1: 0, value2: 0 },
            { key: 3, label: 'Pressure', uom1: 'lb/ft\u00B2', uom2: 'bars', value1: 0, value2: 0 },
            { key: 4, label: 'Mass Emission Rate', uom1: 'lb/hr', uom2: 'kg/s', value1: 0, value2: 0 },
            { key: 4, label: 'Density', uom1: 'lb/ft\u00B3', uom2: 'kg/m\u00B3', value1: 0, value2: 0 },
            { key: 4, label: 'Process Heat Input', uom1: 'BTU/hr', uom2: 'kW', value1: 0, value2: 0 },
            { key: 4, label: 'FF Bag Weight', uom1: 'oz/yd\u00B2', uom2: 'kg/m\u00B2', value1: 0, value2: 0 },
            { key: 4, label: 'FF Bag Permeability', uom1: 'cfm/ft\u00B2', uom2: 'Am\u00B3/hr/m\u00B2', value1: 0, value2: 0 },
            { key: 4, label: 'Pump Capacity', uom1: 'gpm', uom2: 'm\u00B3/hr', value1: 0, value2: 0 },
            { key: 4, label: 'Pump Total Dynamic Head', uom1: 'ft tdh', uom2: 'm tdh', value1: 0, value2: 0 },
            { key: 4, label: 'Thickness', uom1: 'gauge', uom2: 'mm', value1: 3, value2: 0.2391 },
            { key: 4, label: 'Weight', uom1: 'lb', uom2: 'kg', value1: 0, value2: 0 }
        ];

  public apCalc : IApConv = {
    selectedMeasure : this.measurementOptions[0],
    uom : this.apResults[0],
    standardTemperature : 70,
    standardPressure : 14.696,
    normalTemperature : 0,
    normalPressure : 101.325,
    gasPressure : 0,
    gasTemperature : 0
  };
          
  constructor( private toolsService: ToolsService) {
    //this.active = true;
   }

  ngOnInit() {
  }

  private calculateMotorHP(blowerHP){
    var hps = [0, 0.5, 0.75, 1, 1.5, 2, 3, 5, 7.5, 10, 15, 20, 25, 30, 40, 50, 60, 75, 100, 125, 150, 200, 250, 300, 350, 400, 450, 500, 600, 700,
        800, 900, 1000, 1250, 1500, 1750, 2000, 2250, 2500];

    for (var i = 0; i < hps.length - 1; i++) {
        if (blowerHP > hps[i] && blowerHP <= hps[i + 1]) {
            return hps[i + 1];
        }
    }
    return;
  }

  public calculateBlowerSize() {
    if (this.blower.gasFlow <= 0) {
        alert('Measurements must be positive.');
        return;
    }

    if (this.blower.percentH2O <= 0 || this.blower.percentH2O >= 100 || this.blower.fanEfficiency <= 0 || this.blower.fanEfficiency > 100 || this.blower.flowSafetyFactor < 0 ||
        this.blower.flowSafetyFactor > 100 || this.blower.staticPressureSafetyFactor < 0 || this.blower.staticPressureSafetyFactor > 100) {
        alert('Percents must be between 0 and 100.');
        return;
    }

    this.blower.gasFlowActual = Math.round(this.blower.gasFlow * (460 + this.blower.operatingTemperature) * 14.696 / ((1 - this.blower.percentH2O / 100) * 530 * this.blower.fanInletPressure));
    this.blower.designFlowActual = Math.round(this.blower.gasFlowActual * (1 + this.blower.flowSafetyFactor / 100));
    this.blower.designStaticPressure = Math.round(100 * this.blower.fanStaticPressure * (1 + this.blower.staticPressureSafetyFactor / 100)) / 100;
    this.blower.fanBHP = Math.round(100 * this.blower.designFlowActual * this.blower.designStaticPressure / 6356 / this.blower.fanEfficiency * 100) / 100;

    this.blower.fanMotorHP = this.calculateMotorHP(this.blower.fanBHP * 1.1);
    if (!this.blower.fanMotorHP) {
        alert('Input values have exceeded the maximum motor size.  Please try again.');
        return;
    }

    this.blower.wetGasDensity = Math.round(10000 * (0.075 * 29.9 / 29 + 14.696 * 18 / (10.73 * 530 * (100 / this.blower.percentH2O - 1))) * this.blower.gasFlow / this.blower.gasFlowActual) / 10000;
    this.blower.densityFactor = Math.round(100 * 0.075 / this.blower.wetGasDensity) / 100;
    this.blower.standardStaticPressure = Math.round(100 * this.blower.fanStaticPressure * this.blower.densityFactor) / 100;
  }

  public calcRelativeHumidity(){
    if (this.relHum.relativeHumidity < 0) {
        alert('Negative values for relative humidity are not allowed.');
        this.relHum.relativeHumidity = 0;
    }

    var kelvin = 5 / 9 * (this.relHum.temperature - 32) + 273.15;
    // In psi, converted from pascals; used equation from old extranet site, checked against the Arden Buck equation - comparable at modest temps
    this.relHum.saturationPressure = Math.round(Math.exp((-27405.526 + 97.5413 * kelvin - 0.146244 * Math.pow(kelvin, 2) + 0.00012558 * Math.pow(kelvin, 3) - 4.8502E-08 *
        Math.pow(kelvin, 4)) / (4.34903 * kelvin - 0.0039381 * Math.pow(kelvin, 2))) * 22105649.25 * 0.0145037738) / 100;
    this.relHum.percentVolume = Math.round(100 * this.relHum.relativeHumidity * this.relHum.saturationPressure / 14.696) / 100;
  }

  public calcPercentH2O() {
    if (this.wtVol.percentH2OIn < 0) {
        alert("Negative percents are not allowed.");
        this.wtVol.percentH2OIn = 0;
    }

    if (this.wtVol.dryGasMolecularWeight < 0) {
        alert("Negative molecular weights are not allowed.");
        this.wtVol.dryGasMolecularWeight = 0;
    }

    if (this.wtVol.percentH2OInputType === 'Weight') {
        this.wtVol.percentH2OOut = Math.round(this.wtVol.percentH2OIn * 10000 / ((18 * (100 - this.wtVol.percentH2OIn) / this.wtVol.dryGasMolecularWeight + this.wtVol.percentH2OIn))) / 100;
    } else {
        this.wtVol.percentH2OOut = Math.round(this.wtVol.percentH2OIn * 180000 / ((100 - this.wtVol.percentH2OIn) * this.wtVol.dryGasMolecularWeight + this.wtVol.percentH2OIn * 18)) / 100;
    }    
  }

  public convertFlowRates() {
    if (this.flowRate.flowInputUOM === 'SCFMd') {
        this.flowRate.gasFlowRateResult = Math.round(100 * this.flowRate.gasFlowRate * (460 + this.flowRate.gasTemperature) * 14.696 / ((1 - this.flowRate.flowPercentH2OIn / 100) * 530 * this.flowRate.gasPressure)) / 100;
        this.flowRate.gasFlowRateResultUOM = 'ACFM';
    } else if (this.flowRate.flowInputUOM === 'ACFM') {
        this.flowRate.gasFlowRateResult = Math.round(100 * this.flowRate.gasFlowRate * (1 - this.flowRate.flowPercentH2OIn / 100) * 530 * this.flowRate.gasPressure / ((460 + this.flowRate.gasTemperature) * 14.696)) / 100;
        this.flowRate.gasFlowRateResultUOM = 'SCFMd';
    } else {
        this.flowRate.gasFlowRateResult = Math.round(100 * this.flowRate.gasFlowRate * 10.73 * 530 / 14.696 / this.flowRate.dryGasMolecularWeight / 60) / 100;
        this.flowRate.initialWaterVapor = Math.round(100 * this.flowRate.waterMassRate * 10.73 * 530 / 14.696 / 18 / 60) / 100;
        this.flowRate.percentVolumeH2O = Math.round(10000 * this.flowRate.initialWaterVapor / (this.flowRate.gasFlowRateResult + this.flowRate.initialWaterVapor)) / 100;
        this.flowRate.gasFlowRateResultUOM = 'SCFMd';
    }    
  }

  public calculatePollutantConcentration() {
    if (this.pollute.pollutantConcentrationUOM === 'gr/dscf') {
        this.pollute.pollutantConcentration = Math.round(100 * this.pollute.pollutantMassFlow * 7000 / (60 * this.pollute.volumeFlow)) / 100;
    } else {
        this.pollute.pollutantConcentration = Math.round(100 * this.pollute.pollutantMassFlow * 6418091 / (this.pollute.volumeFlow * this.pollute.pollutantMolecularRate)) / 100;
    }   
  }

  public calcPressureAtElevation(){
    this.pressure.elevationPressurePSIA = Math.round(1469.6 * Math.exp(-0.00003540479 * this.pressure.elevation)) / 100;
    this.pressure.elevationPressureInHg = Math.round(203.60206575996194 * this.pressure.elevationPressurePSIA) / 100;    
  }

  public updateMolecularWeights(nColumnChanged) {
    this.molWt.apparentMolecularWeight = 0;
    this.molWt.dryGasApparentMolecularWeight = 0;
    this.molWt.totalVolumePercent = 0;
    this.molWt.totalMassPercent = 0;
    var totalMass = 0;
    var h2oVolumePercent = 0;

    if (nColumnChanged == 1) {
        var dryTotalMass = 0;

        // Sum total mass and total volume percent
        for (var i = 0; i < this.molWt.molWtInputs.length; i++) {
            // No negative percents
            if (this.molWt.molWtInputs[i].percentVolume < 0) {
                alert("Negative percents are not allowed.");
                this.molWt.molWtInputs[i].percentVolume = 0;
            }

            // Enforce rule that volume total does not exceed 100%
            if (this.molWt.totalVolumePercent + this.molWt.molWtInputs[i].percentVolume > 100) {
                alert("Total volume percent cannot exceed 100.");
                this.molWt.molWtInputs[i].percentVolume = 100 - this.molWt.totalVolumePercent;
            }

            this.molWt.totalVolumePercent += this.molWt.molWtInputs[i].percentVolume;
            totalMass += this.molWt.molWtInputs[i].mw * this.molWt.molWtInputs[i].percentVolume / 100;
            if (this.molWt.molWtInputs[i].name === 'H\u2082O') {
                h2oVolumePercent = this.molWt.molWtInputs[i].percentVolume;
            }
        }

        // Calculate individual percent masses, sum total mass percent, and sum dry mass total
        for (var i = 0; i < this.molWt.molWtInputs.length; i++) {
            this.molWt.molWtInputs[i].percentMass = Math.round(100 * this.molWt.molWtInputs[i].percentVolume * this.molWt.molWtInputs[i].mw / totalMass) / 100;
            this.molWt.totalMassPercent += this.molWt.molWtInputs[i].percentMass;

            if (this.molWt.totalVolumePercent !== h2oVolumePercent && this.molWt.molWtInputs[i].name !== 'H\u2082O') {
                dryTotalMass += this.molWt.molWtInputs[i].percentVolume / (this.molWt.totalVolumePercent - h2oVolumePercent) * this.molWt.molWtInputs[i].mw * 100;
            }
        }
        this.molWt.apparentMolecularWeight = Math.round(totalMass * 100) / 100;
        this.molWt.dryGasApparentMolecularWeight = Math.round(dryTotalMass) / 100;
    } else if (nColumnChanged == 2) {
        var molUnitTotal = 0;

        for (var i = 0; i < this.molWt.molWtInputs.length; i++) {
            // No negative percents
            if (this.molWt.molWtInputs[i].percentMass < 0) {
                alert("Negative percents are not allowed.");
                this.molWt.molWtInputs[i].percentMass = 0;
            }

            // Enforce rule that mass total does not exceed 100%
            if (this.molWt.totalMassPercent + this.molWt.molWtInputs[i].percentMass > 100) {
                alert("Total mass percent cannot exceed 100.");
                this.molWt.molWtInputs[i].percentMass = 100 - this.molWt.totalMassPercent;
            }

            if (this.molWt.molWtInputs[i].mw !== 0) {
                molUnitTotal += this.molWt.molWtInputs[i].percentMass / this.molWt.molWtInputs[i].mw;
            }
            this.molWt.totalMassPercent += this.molWt.molWtInputs[i].percentMass;
            if (this.molWt.molWtInputs[i].name === 'H\u2082O') {
                h2oVolumePercent = this.molWt.molWtInputs[i].percentVolume;
            }
        }

        for (var i = 0; i < this.molWt.molWtInputs.length; i++) {
            if (this.molWt.molWtInputs[i].mw !== 0 && molUnitTotal !== 0) {
                this.molWt.molWtInputs[i].percentVolume = Math.round(10000 * this.molWt.molWtInputs[i].percentMass / this.molWt.molWtInputs[i].mw / molUnitTotal) / 100;
            }
            this.molWt.totalVolumePercent += this.molWt.molWtInputs[i].percentVolume;
        }

        for (var i = 0; i < this.molWt.molWtInputs.length; i++) {
            if (this.molWt.totalVolumePercent !== h2oVolumePercent && this.molWt.molWtInputs[i].name !== 'H\u2082O') {
                totalMass += this.molWt.molWtInputs[i].percentVolume / (this.molWt.totalVolumePercent - h2oVolumePercent) * this.molWt.molWtInputs[i].mw * 100;
            }
        }

        this.molWt.apparentMolecularWeight = Math.round(1 / molUnitTotal * 10000) / 100;
        this.molWt.dryGasApparentMolecularWeight = Math.round(totalMass) / 100;
    }

  }

  public clear(){
    this.molWt.totalVolumePercent = 0;
    this.molWt.totalMassPercent = 0;
    this.molWt.apparentMolecularWeight = 0;
    this.molWt.dryGasApparentMolecularWeight = 0;

    for (var i = 0; i < this.molWt.molWtInputs.length; i++) {
      this.molWt.molWtInputs[i].percentVolume = 0;
      this.molWt.molWtInputs[i].percentMass = 0;
    }
    this.molWt.molWtInputs[this.molWt.molWtInputs.length-1].mw = 0;
  }

  public calculateDuctSize() {
    if (this.ductSizing.gasFlow <= 0 || this.ductSizing.gasVelocity <= 0) {
        alert('Measurements must be positive.');
        return;
    }
    if (this.ductSizing.flowUOM === 'ACFM') {
        this.ductSizing.gasFlowActual = this.ductSizing.gasFlow;
    }
    else {
        this.ductSizing.gasFlowActual = Math.round(100 * this.ductSizing.gasFlow * (460 + this.ductSizing.gasTemperature) * 14.696 / ((1 - this.ductSizing.percentH2O / 100) * 530 * this.ductSizing.gasPressure)) / 100;
    }

    this.ductSizing.ductCrossSectionalAreaSqFt = Math.round(100 * this.ductSizing.gasFlowActual / this.ductSizing.gasVelocity) / 100;
    this.ductSizing.ductCrossSectionalAreaSqIn = Math.round(100 * this.ductSizing.ductCrossSectionalAreaSqFt * 144) / 100;
    this.ductSizing.ductDiameterFt = Math.round(100 * Math.pow(this.ductSizing.ductCrossSectionalAreaSqFt / 3.14 * 4, 0.5)) / 100;
    this.ductSizing.ductDiameterIn = Math.round(100 * Math.pow(this.ductSizing.ductCrossSectionalAreaSqFt * 144 / 3.14 * 4, 0.5)) / 100;
  }

  public convertGeneralValues() {
    if (this.genConv.measurement < 0) {
        alert('Measurements must be positive.');
        return;
    }

    var baseResultInches = this.genConv.measurement;
    switch (this.genConv.uom.key)
    {
        case "ft":
            baseResultInches *= Math.pow(12, this.genConv.dimension.dim);
            break;
        case "yd":
            baseResultInches *= Math.pow(36, this.genConv.dimension.dim);
            break;
        case "mi":
            baseResultInches *= Math.pow(63360, this.genConv.dimension.dim);
            break;
        case "mm":
            baseResultInches *= Math.pow(0.0393701, this.genConv.dimension.dim);
            break;
        case "cm":
            baseResultInches *= Math.pow(0.393701, this.genConv.dimension.dim);
            break;
        case "m":
            baseResultInches *= Math.pow(39.3701, this.genConv.dimension.dim);
            break;
        case "km":
            baseResultInches *= Math.pow(39370.1, this.genConv.dimension.dim);
            break;
            // Area-only unit
        case "ac":
            baseResultInches *= 6273000;
            break;
            // Volume-only units
        case "l":
            baseResultInches *= 61.0237;
            break;
        case "qt":
            baseResultInches *= 57.75;
            break;
        case "gal":
            baseResultInches *= 231;
            break;
    }

    for (var i = 0; i < this.results.length; i++) {
        switch (this.results[i].key)
        {
            case "in":
                this.results[i].value = baseResultInches;
                break;
            case "ft":
                this.results[i].value = baseResultInches / Math.pow(12, this.genConv.dimension.dim);
                break;
            case "yd":
                this.results[i].value = baseResultInches / Math.pow(36, this.genConv.dimension.dim);
                break;
            case "mi":
                this.results[i].value = baseResultInches / Math.pow(63360, this.genConv.dimension.dim);
                break;
            case "mm":
                this.results[i].value = baseResultInches / Math.pow(0.0393701, this.genConv.dimension.dim);
                break;
            case "cm":
                this.results[i].value = baseResultInches / Math.pow(0.393701, this.genConv.dimension.dim);
                break;
            case "m":
                this.results[i].value = baseResultInches / Math.pow(39.3701, this.genConv.dimension.dim);
                break;
            case "km":
                this.results[i].value = baseResultInches / Math.pow(39370.1, this.genConv.dimension.dim);
                break;
                // Area-only unit
            case "ac":
                if (this.genConv.dimension.dim == 2) {
                    this.results[i].value = baseResultInches / 6273000;
                }
                else {
                    this.results[i].value = 0;
                }
                break;
                // Volume-only units
            case "l":
                if (this.genConv.dimension.dim == 3) {
                    this.results[i].value = baseResultInches / 61.0237;
                }
                else {
                    this.results[i].value = 0;
                }
                break;
            case "qt":
                if (this.genConv.dimension.dim == 3) {
                    this.results[i].value = baseResultInches / 57.75;
                }
                else {
                    this.results[i].value = 0;
                }
                break;
            case "gal":
                if (this.genConv.dimension.dim == 3) {
                    this.results[i].value = baseResultInches / 231;
                }
                else {
                    this.results[i].value = 0;
                }
                break;
        }
    }
  }

  public updateUOMOptions() {
    var uomModifier = '';
    if (this.genConv.dimension.dim === 2) {
        uomModifier = 'Sq. ';
    }
    else if (this.genConv.dimension.dim === 3) {
        uomModifier = 'Cu. ';
    }

    for (var i = 0; i < this.results.length; i++) {
        if (this.results[i].dim === 1) {
            if (this.results[i].uom.indexOf(' ') >= 0) {
                this.results[i].uom = this.results[i].uom.split(' ')[1];
            }
            this.results[i].uom = uomModifier + this.results[i].uom;
        }
    }

    if (this.genConv.uom.dim !== 1 && this.genConv.uom.dim !== this.genConv.dimension.dim) {
        this.genConv.uom = this.results[0];
    }

    this.convertGeneralValues();
    
  }

  public visibleUnits(output) {
    return output.dim === 1 || output.dim ===this.genConv.dimension.dim;
  }

  public convertPollutionValues(changedIndex){
    for (var i = 0; i < this.apResults.length; i++) {
        var nInput = this.apResults[i].value1;
        if (changedIndex === 2) {
            nInput = this.apResults[i].value2;
        }

        switch (this.apResults[i].label) {
            case 'Flow Rate - Actual':
                if (changedIndex === 2) {
                    this.apResults[i].value1 = Math.round(100 * nInput / 1.699) / 100;
                } else {
                    this.apResults[i].value2 = Math.round(100 * nInput * 1.699) / 100;
                }
                break;
            case 'Flow Rate':
            case 'Flow Rate - Dry':
            case 'Flow Rate - Wet':
            case 'Flow Rate - Standard to Normal':
                if (changedIndex === 2) {
                    this.apResults[i].value1 = Math.round(100 * nInput * (460 + this.apCalc.standardPressure) * this.convertkPaToPSI(this.apCalc.normalPressure) /
                        (1.699 * (460 + this.convertTemperature('°C', '°F', this.apCalc.normalTemperature)) * this.apCalc.standardPressure)) / 100;
                } else {
                    this.apResults[i].value2 = Math.round(100 * nInput * 1.699 * (460 + this.convertTemperature('°C', '°F', this.apCalc.normalTemperature)) *
                        this.apCalc.standardPressure / ((460 + this.apCalc.standardPressure) * this.convertkPaToPSI(this.apCalc.normalPressure))) / 100;
                }
                break;
            case 'Flow Rate - Standard to Actual':
                if (changedIndex === 2) {
                    this.apResults[i].value1 = Math.round(100 * nInput * ((460 + this.apCalc.standardPressure) * this.apCalc.gasPressure) /
                        ((460 + this.apCalc.gasTemperature) * this.apCalc.standardPressure)) / 100;
                } else {
                    this.apResults[i].value2 = Math.round(100 * nInput * (460 + this.apCalc.gasTemperature) * this.apCalc.standardPressure /
                        ((460 + this.apCalc.standardPressure) * this.apCalc.gasPressure)) / 100;
                }
                break;
            case 'Flow Rate - Normal to Actual':
                if (changedIndex === 2) {
                    this.apResults[i].value2 = Math.round(100 * nInput * 1.699 * (460 + this.convertTemperature('°C', '°F', this.apCalc.normalTemperature)) *
                        this.apCalc.standardPressure / ((460 + this.apCalc.standardPressure) * this.convertkPaToPSI(this.apCalc.normalPressure))) / 100;
                } else {
                    this.apResults[i].value1 = Math.round(100 * nInput * ((460 + this.apCalc.standardPressure) * this.convertkPaToPSI(this.apCalc.normalPressure)) /
                        (1.699 * (460 + this.convertTemperature('°C', '°F', this.apCalc.normalTemperature)) * this.apCalc.standardPressure)) / 100;
                }
                break;
            case 'Temperature':
                if (changedIndex === 2) {
                    this.apResults[i].value1 = this.convertTemperature(this.apResults[i].uom2, this.apResults[i].uom1, nInput);
                } else {
                    this.apResults[i].value2 = this.convertTemperature(this.apResults[i].uom1, this.apResults[i].uom2, nInput);
                }
                break;
            case 'Velocity (per second)':
            case 'Velocity (per minute)':
            case 'Pump Total Dynamic Head':
                if (changedIndex === 2) {
                    this.apResults[i].value1 = Math.round(100 * nInput * 3.28084) / 100;
                } else {
                    this.apResults[i].value2 = Math.round(100 * nInput * 0.3048) / 100;
                }
                break;
            case 'Velocity (per hour)':
                if (changedIndex === 2) {
                    this.apResults[i].value1 = Math.round(100 * nInput * 0.621371) / 100;
                } else {
                    this.apResults[i].value2 = Math.round(100 * nInput * 1.60934) / 100;
                }
                break;
            case 'Pressure':
                if (changedIndex === 2) {
                    this.apResults[i].value1 = this.convertPressure(this.apResults[i].uom2, this.apResults[i].uom1, nInput);
                } else {
                    this.apResults[i].value2 = this.convertPressure(this.apResults[i].uom1, this.apResults[i].uom2, nInput);
                }
                break;
            case 'Particulate Concentration':
                if (changedIndex === 2) {
                    this.apResults[i].value1 = Math.round(100 * nInput * 7000 / 60 * 1.699 * (460 +
                        this.convertTemperature('°C', '°F', this.apCalc.normalTemperature)) / (460 + this.apCalc.standardPressure) / 453.59 / 1000) / 100;
                } else {
                    this.apResults[i].value2 = Math.round(100 * nInput / 7000 * 60 / (1.699 * (460 +
                        this.convertTemperature('°C', '°F', this.apCalc.normalTemperature)) / (460 + this.apCalc.standardPressure)) * 453.59 * 1000) / 100;
                }
                break;
            case 'Mass Emission Rate':
                if (changedIndex === 2) {
                    this.apResults[i].value1 = Math.round(100 * nInput / 0.00012598) / 100;
                } else {
                    this.apResults[i].value2 = Math.round(100 * nInput * 0.00012598) / 100;
                }
                break;
            case 'Density':
                if (changedIndex === 2) {
                    this.apResults[i].value1 = Math.round(100 * nInput / 16.01846) / 100;
                } else {
                    this.apResults[i].value2 = Math.round(100 * nInput * 16.01846) / 100;
                }
                break;
            case 'Process Heat Input':
                if (changedIndex === 2) {
                    this.apResults[i].value1 = Math.round(100 * nInput / 0.000292875099) / 100;
                } else {
                    this.apResults[i].value2 = Math.round(100 * nInput * 0.000292875099) / 100;
                }
                break;
            case 'FF Bag Weight':
                if (changedIndex === 2) {
                    this.apResults[i].value1 = Math.round(100 * nInput / 0.0339058) / 100;
                } else {
                    this.apResults[i].value2 = Math.round(100 * nInput * 0.0339058) / 100;
                }
                break;
            case 'FF Bag Permeability':
                if (changedIndex === 2) {
                    this.apResults[i].value1 = Math.round(100 * nInput / 18.2862) / 100;
                } else {
                    this.apResults[i].value2 = Math.round(100 * nInput * 18.2862) / 100;
                }
                break;
            case 'Pump Capacity':
                if (changedIndex === 2) {
                    this.apResults[i].value1 = Math.round(100 * nInput / 0.227) / 100;
                } else {
                    this.apResults[i].value2 = Math.round(100 * nInput * 0.227) / 100;
                }
                break;
            case 'Thickness':
                if (changedIndex === 2) {
                    this.apResults[i].value1 = this.convertThickness(nInput, false);
                } else {
                    this.apResults[i].value2 = this.convertThickness(nInput, true);
                }
                break;
            case 'Weight':
                if (changedIndex === 2) {
                    this.apResults[i].value1 = Math.round(100 * nInput * 2.20462) / 100;
                } else {
                    this.apResults[i].value2 = Math.round(100 * nInput / 2.20462) / 100;
                }
                break;
        }
    } 
  }

  private convertTemperature(inUnit, outUnit, value) {
    if (inUnit === '°F') {
        if (outUnit === '°C') {
            return Math.round(100 * (value - 32) * 5 / 9) / 100;
        } else if (outUnit === 'K') {
            return Math.round(100 * (value + 459.67) * 5 / 9) / 100;
        } else {
            return value;
        }
    } else if (inUnit === '°C') {
        if (outUnit === '°F') {
            return Math.round(100 * (value * 9 / 5 + 32)) / 100;
        } else if (outUnit === 'K') {
            return Math.round(100 * (value + 273.15)) / 100;
        } else {
            return value;
        }
    } else if (inUnit === 'K') {
        if (outUnit === '°F') {
            return Math.round(100 * (value * 9 / 5 - 459.67)) / 100;
        } else if (outUnit === '°C') {
            return Math.round(100 * (value - 273.15)) / 100;
        } else {
            return value;
        }
    } else {
        return value;
    }
  } 

  private convertPressure(inUnit, outUnit, value) {
    if (inUnit === 'in wg') {
        if (outUnit === 'mm Hg') {
            return Math.round(value * 186.832015488) / 100;
        } else if (outUnit === 'psia') {
            return Math.round(100 * value / 27.7) / 100;
        } else {
            return value;
        }
    } else if (inUnit === 'psia') {
        if (outUnit === 'in wg') {
            return Math.round(value * 2770) / 100;
        } else if (outUnit === 'mm Hg') {
            return Math.round(value * 5171.49241024) / 100;
        } else {
            return value;
        }
    } else if (inUnit === 'mm Hg') {
        if (outUnit === 'in wg') {
            return Math.round(value * 53.52401714385129) / 100;
        } else if (outUnit === 'psia') {
            return Math.round(value * 1.93367778713) / 100;
        } else {
            return value;
        }
    } else if (inUnit === 'psi') {
        if (outUnit === 'bars') {
            return Math.round(value * 6.89475729) / 100;
        } else {
            return value;
        }
    } else if (inUnit === 'bars') {
        if (outUnit === 'psi') {
            return Math.round(value * 1450.37738) / 100;
        } else if (outUnit === 'lb/ft\u00B2') {
            return Math.round(value * 208854.34273) / 100;
        } else {
            return value;
        }
    } else if (inUnit === 'lb/ft\u00B2') {
        if (outUnit === 'bars') {
            return Math.round(value * 0.0478802588889) / 100;
        } else {
            return value;
        }
    } else {
        return value;
    }
  }

  private convertThickness(nThickness, bConvertToMetric) {
    var gaugesToMM = [6.07, 5.69, 5.31, 4.94, 4.55, 4.18, 3.8, 3.42, 3.04, 2.66, 2.28, 1.9, 1.71, 1.52, 1.37, 1.21, 1.06, 0.91, 0.84, 0.76, 0.68, 0.61,
        0.53, 0.45, 0.42, 0.38, 0.34, 0.3, 0.27, 0.25, 0.23, 0.21, 0.19, 0.17, 0.16, 0.15];

    if (bConvertToMetric) {
        if (nThickness > 38 || nThickness < 3) {
            alert("Valid gauge must be between 3 and 38.");
            return -1;
        }
    } else if (nThickness > 6.07 || nThickness < 0.15) {
        alert("Thickness in mm must be between 0.15mm and 6.07mm in order to convert to gauge.")
        return -1;
    }

    for (var i = 0; i < gaugesToMM.length; i++) {
        if (bConvertToMetric) {
            if (nThickness >= i + 3 && nThickness < i + 4) {
                return gaugesToMM[i];
            }
        } else {
            if (nThickness <= gaugesToMM[i] && (i + 1 === gaugesToMM.length || nThickness > gaugesToMM[i + 1])) {
                return i + 3;
            }
        }
    }
  }

  private convertkPaToPSI(value) {
      return value * 0.145037738;
  }

  public clearAp() {
    for (var i = 0; i < this.apResults.length; i++) {
      this.apResults[i].value1 = 0;
      this.apResults[i].value2 = 0;
    }

    this.convertPollutionValues(1);
  }
}