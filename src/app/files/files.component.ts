import { Component, OnInit, NgZone } from '@angular/core';

//import { FileUploader, Headers } from 'ng2-file-upload/ng2-file-upload';

import { ConfigService } from "../services/config.service";

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
