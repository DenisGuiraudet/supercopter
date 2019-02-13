import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChopperEditComponent } from './chopper-edit.component';

describe('ChopperEditComponent', () => {
  let component: ChopperEditComponent;
  let fixture: ComponentFixture<ChopperEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChopperEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChopperEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
