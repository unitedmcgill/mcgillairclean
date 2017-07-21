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

}