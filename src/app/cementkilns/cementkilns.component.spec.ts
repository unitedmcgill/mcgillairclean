/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CementKilnsComponent } from './cementkilns.component';

describe('CementKilnsComponent', () => {
  let component: CementKilnsComponent;
  let fixture: ComponentFixture<CementKilnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CementKilnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CementKilnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
