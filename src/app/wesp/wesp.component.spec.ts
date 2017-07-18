/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WespComponent } from './wesp.component';

describe('WespComponent', () => {
  let component: WespComponent;
  let fixture: ComponentFixture<WespComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WespComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WespComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
