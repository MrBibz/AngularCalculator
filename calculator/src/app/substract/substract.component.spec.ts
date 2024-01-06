import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubstractComponent } from './substract.component';

describe('SubstractComponent', () => {
  let component: SubstractComponent;
  let fixture: ComponentFixture<SubstractComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubstractComponent]
    });
    fixture = TestBed.createComponent(SubstractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
