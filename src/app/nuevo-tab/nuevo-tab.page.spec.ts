import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoTabPage } from './nuevo-tab.page';

describe('NuevoTabPage', () => {
  let component: NuevoTabPage;
  let fixture: ComponentFixture<NuevoTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoTabPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
