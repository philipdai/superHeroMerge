/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MergedHeroComponent } from './merged-hero.component';

describe('MergedHeroComponent', () => {
  let component: MergedHeroComponent;
  let fixture: ComponentFixture<MergedHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MergedHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MergedHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
