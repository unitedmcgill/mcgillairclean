/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AlumCastComponent } from './alumcast.component';

describe('AlumCastComponent', () => {
  let component: AlumCastComponent;
  let fixture: ComponentFixture<AlumCastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumCastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumCastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
