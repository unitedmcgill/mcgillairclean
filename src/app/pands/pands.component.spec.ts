/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PandSComponent } from './pands.component';

describe('PandSComponent', () => {
  let component: PandSComponent;
  let fixture: ComponentFixture<PandSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PandSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PandSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
