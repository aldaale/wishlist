import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintSyndetComponent } from './print-syndet.component';

describe('PrintSyndetComponent', () => {
  let component: PrintSyndetComponent;
  let fixture: ComponentFixture<PrintSyndetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintSyndetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintSyndetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
