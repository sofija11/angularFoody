import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenifoodComponent } from './menifood.component';

describe('MenifoodComponent', () => {
  let component: MenifoodComponent;
  let fixture: ComponentFixture<MenifoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenifoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenifoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
