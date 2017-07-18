/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GlassFurnacesComponent } from './glassfurnaces.component';

describe('GlassFurnacesComponent', () => {
  let component: GlassFurnacesComponent;
  let fixture: ComponentFixture<GlassFurnacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlassFurnacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlassFurnacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
