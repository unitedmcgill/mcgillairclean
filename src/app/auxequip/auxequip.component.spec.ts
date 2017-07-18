/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AuxEquipComponent } from './auxequip.component';

describe('AuxEquipComponent', () => {
  let component: AuxEquipComponent;
  let fixture: ComponentFixture<AuxEquipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuxEquipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuxEquipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
