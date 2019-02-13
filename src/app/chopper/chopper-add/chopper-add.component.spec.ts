import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChopperAddComponent } from './chopper-add.component';

describe('ChopperAddComponent', () => {
  let component: ChopperAddComponent;
  let fixture: ComponentFixture<ChopperAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChopperAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChopperAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
