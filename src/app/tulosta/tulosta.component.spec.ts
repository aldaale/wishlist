import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TulostaComponent } from './tulosta.component';

describe('TulostaComponent', () => {
  let component: TulostaComponent;
  let fixture: ComponentFixture<TulostaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TulostaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TulostaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
