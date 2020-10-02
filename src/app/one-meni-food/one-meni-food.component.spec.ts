import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneMeniFoodComponent } from './one-meni-food.component';

describe('OneMeniFoodComponent', () => {
  let component: OneMeniFoodComponent;
  let fixture: ComponentFixture<OneMeniFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneMeniFoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneMeniFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
