import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AloitusComponent } from './aloitus.component';

describe('AloitusComponent', () => {
  let component: AloitusComponent;
  let fixture: ComponentFixture<AloitusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AloitusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AloitusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
