import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DidaticoComponent } from './didatico.component';

describe('DidaticoComponent', () => {
  let component: DidaticoComponent;
  let fixture: ComponentFixture<DidaticoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DidaticoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DidaticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
