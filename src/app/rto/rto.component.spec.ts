/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RtoComponent } from './rto.component';

describe('RtoComponent', () => {
  let component: RtoComponent;
  let fixture: ComponentFixture<RtoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RtoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
