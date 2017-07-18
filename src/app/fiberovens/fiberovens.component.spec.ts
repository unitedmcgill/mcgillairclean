/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FiberOvensComponent } from './fiberovens.component';

describe('FiberOvensComponent', () => {
  let component: FiberOvensComponent;
  let fixture: ComponentFixture<FiberOvensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiberOvensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiberOvensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
