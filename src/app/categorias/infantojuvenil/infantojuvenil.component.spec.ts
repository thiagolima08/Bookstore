import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfantojuvenilComponent } from './infantojuvenil.component';

describe('InfantojuvenilComponent', () => {
  let component: InfantojuvenilComponent;
  let fixture: ComponentFixture<InfantojuvenilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfantojuvenilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfantojuvenilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
