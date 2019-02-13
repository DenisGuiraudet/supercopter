import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChopperGetComponent } from './chopper-get.component';

describe('ChopperGetComponent', () => {
  let component: ChopperGetComponent;
  let fixture: ComponentFixture<ChopperGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChopperGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChopperGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
