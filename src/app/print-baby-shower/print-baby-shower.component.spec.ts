import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintBabyShowerComponent } from './print-baby-shower.component';

describe('PrintBabyShowerComponent', () => {
  let component: PrintBabyShowerComponent;
  let fixture: ComponentFixture<PrintBabyShowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintBabyShowerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintBabyShowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
