/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SteelScarfComponent } from './steelscarf.component';

describe('SteelScarfComponent', () => {
  let component: SteelScarfComponent;
  let fixture: ComponentFixture<SteelScarfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SteelScarfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SteelScarfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
