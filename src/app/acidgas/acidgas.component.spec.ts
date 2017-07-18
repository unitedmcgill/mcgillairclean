/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AcidGasComponent } from './acidgas.component';

describe('AcidGasComponent', () => {
  let component: AcidGasComponent;
  let fixture: ComponentFixture<AcidGasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcidGasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcidGasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
