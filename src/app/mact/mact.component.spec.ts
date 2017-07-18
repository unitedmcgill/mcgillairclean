/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MactComponent } from './mact.component';

describe('MactComponent', () => {
  let component: MactComponent;
  let fixture: ComponentFixture<MactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
