/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SemiconductorsComponent } from './semiconductors.component';

describe('SemiconductorsComponent', () => {
  let component: SemiconductorsComponent;
  let fixture: ComponentFixture<SemiconductorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemiconductorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemiconductorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
