/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EspComponent } from './esp.component';

describe('EspComponent', () => {
  let component: EspComponent;
  let fixture: ComponentFixture<EspComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
