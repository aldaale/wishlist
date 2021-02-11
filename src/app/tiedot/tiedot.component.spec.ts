import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiedotComponent } from './tiedot.component';

describe('TiedotComponent', () => {
  let component: TiedotComponent;
  let fixture: ComponentFixture<TiedotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiedotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiedotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
