/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IncineratorsComponent } from './incinerators.component';

describe('IncineratorsComponent', () => {
  let component: IncineratorsComponent;
  let fixture: ComponentFixture<IncineratorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncineratorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncineratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
