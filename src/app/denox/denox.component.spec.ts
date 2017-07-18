/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DenoxComponent } from './denox.component';

describe('DenoxComponent', () => {
  let component: DenoxComponent;
  let fixture: ComponentFixture<DenoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DenoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DenoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
