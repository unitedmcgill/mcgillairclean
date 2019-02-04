import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {
  public radioSelected : string = "Autoclaves";
  config: any;
  constructor(private http: HttpClient) {
    console.log('ctor for ConfigService called.')
  }

  load() {
    console.log('Inside Load');
    return new Promise((resolve) => {
      this.http.get('./app.config.json')
        .subscribe(config => {
          console.log('Configuration loaded...........');
          this.config = config;
          resolve();
        });
    });
  }

}