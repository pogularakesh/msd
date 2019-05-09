import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsdComponent } from './msd.component';

describe('MsdComponent', () => {
  let component: MsdComponent;
  let fixture: ComponentFixture<MsdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
