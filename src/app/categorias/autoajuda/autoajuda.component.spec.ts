import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoajudaComponent } from './autoajuda.component';

describe('AutoajudaComponent', () => {
  let component: AutoajudaComponent;
  let fixture: ComponentFixture<AutoajudaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoajudaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoajudaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
