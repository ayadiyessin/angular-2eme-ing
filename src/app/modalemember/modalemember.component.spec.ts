import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalememberComponent } from './modalemember.component';

describe('ModalememberComponent', () => {
  let component: ModalememberComponent;
  let fixture: ComponentFixture<ModalememberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalememberComponent]
    });
    fixture = TestBed.createComponent(ModalememberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
