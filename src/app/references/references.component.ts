import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss']
})
export class ReferencesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public links = 
           [{ name: 'EPA Home Page', link: 'http://www.epa.gov/' },
            { name: 'EPA Air Science', link: 'http://www2.epa.gov/science-and-technology/air-science' },
            { name: 'EPA CFR Promulgated Test Methods (TM)', link: 'http://www.epa.gov/ttnemc01/promgate.html' },
            { name: 'National Emission Standards for Hazardous Air Pollutants (NESHAP)', link: 'http://www.epa.gov/airtoxics/mactfnlalph.html' },
            { name: 'EPA Laws and Regulations', link: 'http://www.epa.gov/lawsregs/' },
            { name: 'EPA Text Documents', link: 'http://www.epa.gov/ttn' },
            { name: 'EPA Air Toxics Network', link: 'http://www.epa.gov/ttn/atw/' },
            { name: 'EPA Clean Air Technology Center', link: 'http://www.epa.gov/ttn/catc' },
            { name: 'EPA Envirofacts Warehouse', link: 'http://www.epa.gov/enviro' },
            { name: 'EPA Pollution Prevention Information', link: 'http://www.epa.gov/p2/' },
            { name: 'EPA CHIEF Inventories and Emission Factors', link: 'http://www.epa.gov/ttn/chief/index.html' },
            { name: 'Pacific Northwest Pollution Prevention Resource Center', link: 'http://www.pprc.org/' },
            { name: 'EPA Office of Air and Radiation', link: 'http://www.epa.gov/oar' },
            { name: 'EPA Office of Air Quality Planning and Standards', link: 'http://www.epa.gov/oar/oaqps' },
            { name: 'EPA Office of Underground Storage Tanks (OUST)', link: 'http://www.epa.gov/OUST' },
            { name: 'State and Regional Underground Storage Tanks Agencies', link: 'http://www.epa.gov/oust/wheruliv.htm' },
            { name: 'EPA Superfund', link: 'http://www.epa.gov/superfund/index.htm' },
            { name: 'EPA Brownfields', link: 'http://www.epa.gov/brownfields' },
            { name: 'EPA Chemical Emergency Preparedness', link: 'http://www.epa.gov/emergencies/index.htm' },
            { name: 'EPA Right to Know Information', link: 'http://www.epa.gov/epahome/r2k.htm' },
            { name: 'EPA Office of Water Division', link: 'http://www.epa.gov/OWM' },
            { name: 'EPA Environmental and Compliance History Online (ECHO)', link: 'http://www.epa.gov/echo' },
            { name: 'EPA Air Data', link: 'http://www.epa.gov/airdata/' },
            { name: 'EPA Watershed Information', link: 'http://cfpub.epa.gov/surf/locate/index.cfm' }];

}
