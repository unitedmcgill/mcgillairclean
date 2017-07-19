import { Component, OnInit } from '@angular/core';
import { ToolsService } from './tools.service';
import { IBlower } from '../models/blower';
import { IRelHum } from '../models/volume';
import { IWtVol } from '../models/volume';

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

}