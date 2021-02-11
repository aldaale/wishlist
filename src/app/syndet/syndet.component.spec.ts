import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyndetComponent } from './syndet.component';

describe('SyndetComponent', () => {
  let component: SyndetComponent;
  let fixture: ComponentFixture<SyndetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SyndetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SyndetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
