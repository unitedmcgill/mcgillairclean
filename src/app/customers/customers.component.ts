import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public customers = ['3M Company', 'ADM', 'AFG', 'American Combustion Industries', 'American Video', 'Anderson 2000, Inc.', 'Anderson Cyanamid',
            'Archer Daniels Midland (ADM)', 'Asarco', 'Ashland Chemical', 'B.F. Goodrich', 'Ball Glass', 'Basic Environmental Engineering', 'Battelle Memorial Institute',
            'Belden Brick', 'Birmingham Steel', 'Borg-Warner', 'Bowater', 'Brockway Glass Company, Inc.', 'Bunge Corporation', 'Burney Mountain Power',
            'Canmet Energy Technologies', 'Cardinal Glass', 'Cargill', 'Caterpillar', 'Central Soya', 'CertainTeed', 'Champion', 'City of Hampton, VA', 'Collins Pine',
            'Container Corporation of America', 'Corning', 'Cristalarias Toro', 'Dan River', 'Degussa Carbon Black Corporation', 'Delco', 'Delco-Remy (G.M.)', 'DuPont',
            'Federal White Cement', 'Ferro', 'Fiberglass Industries (FGI)', 'Footner Forest Products', 'Firestone', 'Ford Motor Company', 'Fort Howard Paper', 'Fort James',
            'Foster Forbes', 'Fostoria Glass', 'GAF', 'Gallo Glass', 'General Electric Company', 'General Motors', 'Geneva Steel', 'Georgia-Pacific Corporation',
            'Gilman Paper', 'Granite City Steel', 'GTE', 'Guardian Glass', 'Hyundai', 'International Paper', 'Islip Resource Recovery Agency', 'James River Paper',
            'Johns Manville', 'Juken Nissho Limited', 'Kimble Glass', 'Knauf Fiberglass', 'LaGloria Gas and Oil', 'Langboard', 'Leone Industries',
            'Louisiana-Pacific Corporation', 'Lummis Crest, Inc.', 'MacMillan Bloedel, Inc.', 'Mantiwoc', 'Marvin Windows & Doors', 'Mead', 'Medtronic, Inc.',
            'Merck & Company, Inc.', 'Merck Pharmaceutical', 'Metco', 'Microchip Technology, Inc.', 'Mideco Dust Control', 'Montgomery County', 'Monsanto', 'Motorola',
            'Mt. Lassen Power', 'National Lead', 'New Hanover County', 'NGA Ceramics', 'Nissan Motor', 'North Carolina Finishing', 'North Slope Borough',
            'Northern State Power Company', 'NSA', 'Oberlin College', 'Occidental Chemical', 'Ogden Martin Systems, Inc.', 'Osram-Sylvania', 'Oswego Corporation, NY',
            'Owens Brockway', 'Owens Corning', 'Owens-Illinois', 'Procter & Gamble Company', 'Philips Compounds', 'Phillip Morris', 'Philips Lighting Company', 'Pilkington',
            'Pope Douglas', 'Potlatch Corporation', 'PPG', 'Procter and Gamble', 'RCA', 'R.W. Taylor/Oneida County', 'Rocky Mountain Bottling Company', 'Rogers Corporation',
            'S.D. Warren', 'Scott Paper Company', 'SCM Glidco Organics', 'Sherwin-Williams', 'Smurfit-Stone', 'Southeastern Ohio Training Center', 'Spang & Company',
            'St. Regis Paper & Bag', 'State of North Dakota', 'State of Ohio', 'Tafisa', 'Techneglas', 'Temple-Inland, Inc.', 'Texas Instruments', 'Thomson Video', 'Tropicana',
            'U.S. Steel', 'Union Camp Corporation', 'Uniroyal Chemical Company, Inc.', 'University of Minnesota', 'UPF', 'Vetrotex America', 'Vetrotex CertainTeed',
            'Vicon Recovery Associates', 'Volvo Truck Corporation', 'Von Roll, Inc.', 'Waste Management', 'Westmoreland County', 'Weyerhaeuser Company',
            'Williamette Industries, Inc.'
        ];

}
