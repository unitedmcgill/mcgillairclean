/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RubPlastComponent } from './rubplast.component';

describe('RubPlastComponent', () => {
  let component: RubPlastComponent;
  let fixture: ComponentFixture<RubPlastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RubPlastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RubPlastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
